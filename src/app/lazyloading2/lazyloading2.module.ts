import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyloading2RoutingModule } from './lazyloading2-routing.module';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    Lazyloading2RoutingModule
  ]
})
export class Lazyloading2Module { }
