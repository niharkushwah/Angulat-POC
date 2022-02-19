import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimetableComponent} from "./timetable.component";
import {UploadtimetableComponent} from "./uploadtimetable/uploadtimetable.component";
import {GettimetableComponent} from "./gettimetable/gettimetable.component";

const routes: Routes = [
  {
    path: '',
    component: TimetableComponent, children: [
      {path: '', redirectTo: 'GetTimeTable', pathMatch: 'full'},
      {path: 'UploadTimeTable', component: UploadtimetableComponent},
      {path: 'GetTimeTable', component: GettimetableComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetableRoutingModule { }
