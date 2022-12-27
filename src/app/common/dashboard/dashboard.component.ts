import { Component } from '@angular/core';
import { environment } from '../../environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = environment.appName;
}
