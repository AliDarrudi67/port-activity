import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-port-cargo-table',
  templateUrl: './port-cargo-table.component.html',
})
export class PortCargoTableComponent {
  @Output() selectCargo = new EventEmitter<any>();
  displayedColumns: string[] = [
    'portName', 'cargo', 'f', 'blCode', 'quantity',
    'ldRate', 'term', 'demRate', 'desRate',
    'allowed', 'used', 'deduction', 'balance', 'laycanFrom', 'laycanTo'
  ];

  selectedCargoId: number | null = null;

  portCargoList = [
    {
      id: 1,
      portName: 'Port A',
      cargo: 'Wheat',
      f: 'F1',
      blCode: 'BL123',
      quantity: 5000,
      ldRate: 200,
      term: 'FOB',
      demRate: 100,
      desRate: 80,
      allowed: 50,
      used: 40,
      deduction: 2,
      balance: 8,
      laycanFrom: '2025-08-01',
      laycanTo: '2025-08-10'
    },
    {
      id: 2,
      portName: 'Port B',
      cargo: 'Corn',
      f: 'F2',
      blCode: 'BL456',
      quantity: 3000,
      ldRate: 150,
      term: 'CFR',
      demRate: 90,
      desRate: 70,
      allowed: 40,
      used: 38,
      deduction: 1,
      balance: 1,
      laycanFrom: '2025-08-05',
      laycanTo: '2025-08-15'
    }
  ];

  select(cargo: any) {
    this.selectedCargoId = cargo.id;
    this.selectCargo.emit(cargo);
  }
}
