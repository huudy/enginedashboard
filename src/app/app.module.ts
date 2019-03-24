import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highstock from 'highcharts/modules/stock.src';
import * as solidg from 'highcharts/modules/solid-gauge.src'

import { RiskOMeterComponent } from './risk-o-meter/risk-o-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RiskOMeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, highstock, solidg ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
