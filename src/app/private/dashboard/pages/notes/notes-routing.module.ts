import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadnotesComponent} from "./uploadnotes/uploadnotes.component";
import {NotesComponent} from "./notes.component";
import {GetnotesComponent} from "./getnotes/getnotes.component";

const routes: Routes = [
  {
    path: '',
    component: NotesComponent, children: [
      {path: '', redirectTo: 'uploadnotes', pathMatch: 'full'},
      {path: 'uploadnotes', component: UploadnotesComponent},
      {path: 'listnotes', component: GetnotesComponent},

    ]
  }
  // {path: '', component: UploadnotesComponent},
  // {path: 'uploadnotes', component: UploadnotesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
