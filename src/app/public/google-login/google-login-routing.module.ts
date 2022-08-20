import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {GoogleLoginComponent} from "./google-login.component";

const routes: Routes = [
  { path: 'Login', component: GoogleLoginComponent },
  { path: '', redirectTo:'Login', pathMatch: 'Full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleLoginRoutingModule { }
