import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {NotesComponent} from "./pages/notes/notes.component";
import {HomeComponent} from "./pages/home/home.component";
import {NoticeComponent} from "./pages/notice/notice.component";
import {TimetableComponent} from "./pages/timetable/timetable.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      // {path: 'dashboard', component: DashboardComponent},
      // {path: 'notes', component: NotesComponent},
      {path: 'home', component: HomeComponent},
      {path: 'notice', component: NoticeComponent},
      {path: 'timetable', component: TimetableComponent},
      {
        path: 'notes',
        loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule)
      },
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}