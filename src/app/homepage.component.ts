import { Component } from '@angular/core';
import { environment } from './environment';

@Component({
  selector: 'app-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = environment.appName;
  testLabel = 'Test Accordion';
  testContent = 'Basic text';
}
