import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from "../../shared/shared.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import { PortActivityTableComponent } from './port-activity-table/port-activity-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { PortCargoTableComponent } from './port-cargo-table/port-cargo-table.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    PortActivityTableComponent,
    PortCargoTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    SharedModule,
    MatPaginatorModule,
    MatCardModule,
    MatTableModule
  ]
})
export class HomeModule { }
