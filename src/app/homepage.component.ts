import { Component } from '@angular/core';
import { environment } from './environment';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  title = environment.appName;
}
