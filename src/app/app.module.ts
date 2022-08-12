import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DevUIModule } from 'ng-devui';
import { AppComponent } from './app.component';
import { LayoutDefaultComponent } from './layout/layout-default/layout-default.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpUtil } from './core/common/http-util';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutDefaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DevUIModule
  ],
  providers: [
    HttpUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
