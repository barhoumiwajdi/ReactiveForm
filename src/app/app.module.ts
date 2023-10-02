import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootCampFormComponent } from './Template/boot-camp-form/boot-camp-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Template/Auth/register/register.component';
import { DynamicFormComponent } from './Template/dynamic-form/dynamic-form.component';
import { HomeComponent } from './Template/home/home.component';
import { HomeDashComponent } from './Template/Dashbord/home-dash/home-dash.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Template/Auth/login/login.component';
import { JwtInterceptor } from './Helpers/jwt.interceptor';
import { ErrorInterceptor } from './Helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BootCampFormComponent,
    RegisterComponent,
    DynamicFormComponent,
    HomeComponent,
    HomeDashComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
