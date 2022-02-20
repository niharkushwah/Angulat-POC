import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { UploadnotesComponent } from './uploadnotes/uploadnotes.component';
import { GetnotesComponent } from './getnotes/getnotes.component';
import {DashboardModule} from "../../dashboard.module";
import {ReactiveFormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    UploadnotesComponent,
    GetnotesComponent
  ],
  exports: [
    UploadnotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
  ]
})
export class NotesModule { }
