import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import { NotesComponent } from './pages/notes/notes.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
    declarations: [
        DashboardComponent,
        NotesComponent,
        HomeComponent,
        NoticeComponent,
        TimetableComponent,
        NavbarComponent,
        FooterComponent
    ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }
