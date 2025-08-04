import { Component, OnInit } from '@angular/core';
import { MainService } from "./core/services/main.service";
import { NavigationEnd, Router } from "@angular/router";
import { ApiEndpoints } from './core/config/apiEndpoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nova';
  userInfo: any
  showDropdown = false;
  loggined = false;
  categories: any[] = [];
  lang: any = localStorage.getItem('lang') ?? 'fa'
  sidebarOpen = false;



  constructor(
    private router: Router,
    public mainService: MainService,
  ) {
    this.getLang()
    this.getUserInfo()
    this.getCategories()
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.sidebarOpen = false; // یا مستقیماً set(false)
        if (window.innerWidth < 1024)
          this.mainService.showSidebar.set(false);
      }
    });
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  toggleDropdown(state: boolean) {
    this.showDropdown = state;
  }

  getCategories() {
    this.mainService.get(ApiEndpoints.category.list).subscribe(
      (response) => {
        this.categories = response?.data
      }
    )
  }

  getUserInfo() {
    if (localStorage.getItem('customerToken')) {
      this.mainService.get(ApiEndpoints.user.tokenValidate).subscribe(
        (response) => {
          if (!response.result) {
            localStorage.clear();
            location.href = '/'
          }
          this.loggined = true;
          this.userInfo = response?.data
          this.mainService.userInfo.set(this.userInfo)
        }
      )
    }
  }

  logout() {
    localStorage.clear();
    location.href = '/'
  }

  getLang() {
    this.mainService.get(ApiEndpoints.lang.list).subscribe(
      (response) => {
        this.mainService.lang.set(response?.data)
      }
    )
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang)
    location.href = '/'
  }
}
