import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './common/calendar/calendar.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/calendar/2022', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendar/:year', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
