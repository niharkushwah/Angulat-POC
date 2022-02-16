import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoticeComponent} from "./notice.component";
import {UploadnoticeComponent} from "./uploadnotice/uploadnotice.component";
import {GetnoticeComponent} from "./getnotice/getnotice.component";

const routes: Routes = [
  {
    path: '', component: NoticeComponent, children: [
      {
        path: '', redirectTo: 'getnotice', pathMatch: 'full'
      },
      {
        path: 'UploadNotice', component: UploadnoticeComponent
      },
      {
        path: 'GetNotice', component: GetnoticeComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NoticeRoutingModule { }
