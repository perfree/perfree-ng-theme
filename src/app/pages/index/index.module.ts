import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index/index.component';
import { PaginationModule } from 'ng-devui/pagination';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
