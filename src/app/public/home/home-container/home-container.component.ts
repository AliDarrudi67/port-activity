import { Component } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {
  selectedCargo: any;

  onCargoSelected(cargo: any) {
    this.selectedCargo = cargo;
  }

}
