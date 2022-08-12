import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { CustomComponent } from './custom/custom.component';


@NgModule({
  declarations: [
    CustomComponent
  ],
  imports: [
    CommonModule,
    CustomRoutingModule
  ]
})
export class CustomModule { }
