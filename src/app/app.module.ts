import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';

import { HomepageComponent } from './homepage.component';
import { MaterialModule } from '../material.module';
import { config } from 'rxjs';
import { WindowComponent } from './common/window/window.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { CalendarComponent } from './common/calendar/calendar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomepageComponent,
    WindowComponent,
    DashboardComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [HomepageComponent]
})
export class AppModule { }
