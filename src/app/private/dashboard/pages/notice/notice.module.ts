import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import {GetnoticeComponent} from "./getnotice/getnotice.component";
import {UploadnoticeComponent} from "./uploadnotice/uploadnotice.component";
import {NoticeComponent} from "./notice.component";


@NgModule({
  declarations: [
    GetnoticeComponent,
    UploadnoticeComponent,
    NoticeComponent,
  ],
  imports: [
    CommonModule,
    NoticeRoutingModule
  ]
})
export class NoticeModule { }
