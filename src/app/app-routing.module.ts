import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';


const routes: Routes = [
  {path:"lazyloading2",loadChildren:()=> import('./lazyloading2/lazyloading2.module').then(m=>m.Lazyloading2Module)},
  {path:"",loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)},
  
  {path:"register",loadChildren:()=> import('./register/register.module').then(m=>m.RegisterModule)},
  {path:"**",loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)}
  
 
  // {path:'', component:LoginComponent},
  // {path:'register', component:RegisterComponent},
  // {path:'login', component:LoginComponent},
  //  {path:'**', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
