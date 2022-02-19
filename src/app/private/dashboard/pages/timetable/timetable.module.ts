import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import {DashboardModule} from "../../dashboard.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UploadtimetableComponent} from "./uploadtimetable/uploadtimetable.component";
import {GettimetableComponent} from "./gettimetable/gettimetable.component";


@NgModule({
  declarations: [
    UploadtimetableComponent,
    GettimetableComponent
  ],
  imports: [
    CommonModule,
    TimetableRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
  ]
})
export class TimetableModule { }
