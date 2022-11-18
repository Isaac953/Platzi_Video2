import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { SigninComponent } from './components/main/signin/signin.component';
import { LoginComponent } from './components/main/login/login.component';
import { Error404Component } from './components/main/error404/error404.component';
import { MaintenanceComponent } from './components/main/maintenance/maintenance.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error-404', component: Error404Component },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  SigninComponent,
  LoginComponent,
  Error404Component,
  MaintenanceComponent,
];
