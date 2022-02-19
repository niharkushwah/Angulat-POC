import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import {DashboardModule} from "../../dashboard.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimetableRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
  ]
})
export class TimetableModule { }
