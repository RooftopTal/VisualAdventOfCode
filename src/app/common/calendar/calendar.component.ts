import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  title = 'Calendar';

  showYear = 0;
  showDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  constructor(
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.showYear = params['year'];
      this.title = params['year'];
    });
  }
}
