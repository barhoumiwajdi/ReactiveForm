import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Template/Auth/register/register.component';
import { BootCampFormComponent } from './Template/boot-camp-form/boot-camp-form.component';
import { DynamicFormComponent } from './Template/dynamic-form/dynamic-form.component';
import { HomeComponent } from './Template/home/home.component';
import { LoginComponent } from './Template/Auth/login/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'form', component: BootCampFormComponent },
  { path: 'dynamic', component: DynamicFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
