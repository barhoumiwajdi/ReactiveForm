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
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Template/Auth/login/login.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
