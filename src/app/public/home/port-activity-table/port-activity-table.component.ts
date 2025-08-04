import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/core/services/main.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

export interface PortActivityEvent {
  id: number;
  day: string;
  activityType: string;
  fromDateTime: Date;
  toDateTime: Date;
  duration: number;
  percent: number;
  remarks: string;
  deductions: number;
  hasOrderError?: boolean; 
  isOutOfOrder?: boolean;
  showAdjustIcon?: boolean;
}


@Component({
  selector: 'app-port-activity-table',
  templateUrl: './port-activity-table.component.html',
  styleUrls: ['./port-activity-table.component.scss']
})

export class PortActivityTableComponent {
  @Input() selectedCargo: any; 

  events: PortActivityEvent[] = [];

  displayedColumns = [
    'day',
    'activityType',
    'fromDateTime',
    'duration',
    'percent',
    'toDateTime',
    'remarks',
    'deductions',
    'actions'
  ];

  activityTypes = [
    'Loading',
    'Unloading',
    'Waiting',
    'Berthing',
    'Unberthing',
    'Inspection',
    'Bunkering',
    'Maintenance',
  ];

  percentOptions = [0, 50, 100];

  constructor(private cdr: ChangeDetectorRef, private dialog: MatDialog, private mainService: MainService) {
    setInterval(() => {
      this.checkOrderAndHighlight()
    }, 3000);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCargo']) {
      this.resetEvents();
    }
  }

  resetEvents() {
    this.events = []; 
    if (this.selectedCargo) {
      this.events.push({
        id: 1,
        day: new Date().toDateString(),
        activityType: 'Loading',
        fromDateTime: new Date(),
        toDateTime: new Date(),
        duration: 0,
        percent: 0,
        remarks: '',
        deductions: 0,
      });
    }
  }

  addNewEvent() {
    const now = new Date();
    const newEvent = {
      id: this.events.length + 1,
      day: now.toDateString(),
      activityType: this.activityTypes[0],
      fromDateTime: now,
      toDateTime: now,
      duration: 0,
      percent: 0,
      remarks: '',
      deductions: 0,
    };

    this.events = [...this.events, newEvent];
  }

  onFromDateChange(inputEvent: Event, row: PortActivityEvent) {
    const value = (inputEvent.target as HTMLInputElement).value;
    const newFrom = new Date(value);

    row.fromDateTime = newFrom;

    if (row.toDateTime) {
      const diffMs = row.toDateTime.getTime() - row.fromDateTime.getTime();
      row.duration = +(diffMs / (1000 * 60 * 60)).toFixed(2); // بر حسب ساعت
    }

    this.calculateDeductions(row);

    this.updateDay(row);
    this.checkOrderAndHighlight();
  }

  formatDateForInput(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const yyyy = date.getFullYear();
    const MM = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    const hh = pad(date.getHours());
    const mm = pad(date.getMinutes());
    return `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
  }

  onPercentChange(event: PortActivityEvent) {
    this.calculateDeductions(event);
  }

  updateDay(event: PortActivityEvent) {
    event.day = event.fromDateTime.toDateString();
  }

  deleteEvent(event: PortActivityEvent) {
    const dialogConfig = this.mainService.defaultDialogConfig
    const dialog = this.dialog.open(ConfirmDialogComponent, dialogConfig)
    dialog.afterClosed().subscribe(
      (response) => {
        if (response?.result) {
          this.events = this.events.filter(e => e.id !== event.id);
        }
      }
    )
  }

  cloneEvent(event: PortActivityEvent) {
    const newEvent = { ...event };
    newEvent.id = this.events.length + 1;
    this.events.push(newEvent);
  }

  calculateDeductions(event: PortActivityEvent) {
    event.deductions = (event.duration * event.percent) / 100;
  }

  checkOrderAndHighlight() {
    this.events.forEach(e => {
      e.hasOrderError = false;
      e.showAdjustIcon = false;
    });

    for (let i = 1; i < this.events.length; i++) {
      const prev = this.events[i - 1];
      const curr = this.events[i];

      const prevFrom = new Date(prev.fromDateTime).getTime();
      const currFrom = new Date(curr.fromDateTime).getTime();

      if (currFrom < prevFrom) {
        curr.hasOrderError = true;
        curr.showAdjustIcon = true;
      }
    }

    this.events = [...this.events];
    this.cdr.detectChanges();
  }

  adjustEventPosition(event: PortActivityEvent) {
    this.events = this.events.filter(e => e.id !== event.id);

    const eventFromTime = new Date(event.fromDateTime).getTime();
    let insertIndex = this.events.findIndex(e => new Date(e.fromDateTime).getTime() > eventFromTime);
    if (insertIndex === -1) {
      insertIndex = this.events.length;
    }

    this.events.splice(insertIndex, 0, event);

    this.events.forEach(e => {
      e.hasOrderError = false;
      e.showAdjustIcon = false;
    });

    this.checkOrderAndHighlight();

  }

  calculateDuration(row: PortActivityEvent) {
    const from = new Date(row.fromDateTime);
    const to = new Date(row.toDateTime);
    const diffMs = to.getTime() - from.getTime();
    row.duration = +(diffMs / (1000 * 60 * 60)).toFixed(2); // ساعت با دقت دو رقم اعشار
  }

}
