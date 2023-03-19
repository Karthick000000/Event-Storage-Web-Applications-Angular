import { NgModule } from '@angular/core';
import { Routes, RouterModule, ResolveEnd } from '@angular/router';
import { SignupComponent } from './login/signup/signup.component';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './main/main.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LayoutComponent } from './layout/layout.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: '',                       
    component: LayoutComponent,
    children: [
      {
        path: 'events',
        component: EventsComponent   
      },
    ]
  },
  {
    path: 'login',
    component: LoginLayoutComponent, 
    children: [
      {
        path: '',
        component: LoginComponent   
      },
      {
        path: 'signup',
        component: SignupComponent   
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [];
