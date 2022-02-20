import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {HomeComponent} from "./pages/home/home.component";

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
      {
        path: 'TimeTable',
        loadChildren: () => import('./pages/timetable/timetable.module').then(m => m.TimetableModule)
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
