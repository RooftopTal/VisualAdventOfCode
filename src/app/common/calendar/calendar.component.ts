import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  title = environment.appName;

  showYear = 0;
  showDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.route.params.subscribe(params => {
      this.showYear = params['year'];
      this.title = environment.appName + ': ' + params['year'];
    });
  }
}
