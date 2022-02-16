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
      {path: '', redirectTo: 'Home', pathMatch: 'full'},
      {path: 'Home', component: HomeComponent},
      {
        path: 'Notes',
        loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule)
      },
      {
        path: 'Notice',
        loadChildren: () => import('./pages/notice/notice.module').then(m => m.NoticeModule)
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
