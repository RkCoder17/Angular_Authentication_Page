import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:"lazyloading2",loadChildren:()=> import('./lazyloading2/lazyloading2.module').then(m=>m.Lazyloading2Module)},
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
   {path:'**', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
