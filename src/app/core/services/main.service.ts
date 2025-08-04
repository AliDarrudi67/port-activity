import { Injectable, signal } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = environment.baseUrl
  defaultDialogConfig = {
    disableClose: false,
    autoFocus: false,
    minWidth: '350px',
    maxHeight: '80vh',
    maxWidth: '95vw',
    panelClass: 'custom-dialog',
    data: {}
  }
  token = '';
  username = signal<string>('')
  userRole = signal<string>('')
  options = signal<any>([])
  showSidebar = signal<boolean>(true)
  userInfo = signal<any>({})
  lang = signal<any>({})
  
  constructor(
    private http: HttpClient,
  ) {
    this.token = localStorage.getItem('customerToken')!
  }

  get(endPoint: string, queryString: any = { token: this.token }): Observable<any> {
    this.token = localStorage.getItem('customerToken')!
    return this.http.get(this.baseUrl + endPoint, { params: this.prepareQueryString(queryString) })
  }

  getWithoutBaseUrl(endPoint: string, queryString: any): Observable<any> {
    return this.http.get(endPoint, { params: this.prepareQueryString(queryString) })
  }

  prepareQueryString(queryString: any) {
    let params = new HttpParams();
    const fields = Object.keys(queryString)
    fields.forEach(item => {
      if (queryString[item] && queryString[item] !== -1)
        params = params.append(item, queryString[item]);
    })
    return params
  }

  post(endPoint: string, data: any): Observable<any> {
    this.token = localStorage.getItem('token')!
    return this.http.post(this.baseUrl + endPoint + `?token=${this.token}`, data)
  }

  delete(endPoint: string, id: number) {
    this.token = localStorage.getItem('customerToken')!
    return this.http.get(this.baseUrl + endPoint + `?id=${id}&token=${this.token}`)
  }

  getFormData(form: any, type = 'form') {
    let fields: any
    if (type !== 'form') {
      fields = Object.keys(form)
      const formData = new FormData()
      fields.forEach((item: any) => {
        formData.append(item, form[item])
      })
      return formData
    } else {
      fields = Object.keys(form.value)
      const formData = new FormData()
      fields.forEach((item: any) => {
        formData.append(item, form.get(item).value)
      })
      return formData
    }
  }

  getFormDataObject(object: any) {
    const fields = Object.keys(object)
    const formData = new FormData()
    fields.forEach(item => {
      formData.append(item, object[item])
    })
    return formData
  }


}
