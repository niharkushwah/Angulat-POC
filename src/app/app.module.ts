import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './public/register/register.component';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from "./app-routing.module";
import {TokenInterceptor} from "./interceptor/token.interceptor";
import {LoaderComponent} from "./components/loader/loader.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
