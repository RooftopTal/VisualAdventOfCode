import { Component, Input } from '@angular/core';
import { environment } from './../../../environments/environment';
import { AOCResponse } from './aoc-response';
import { WindowService } from './window.service';

@Component({
  selector: 'aoc-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  @Input() set year(year: number) {
    this.internalYear = year;
    this.isOpen = false;
    this.aocResponse = undefined;
  }
  internalYear: number = 0;
  @Input() set day(day: number) {
    this.internalDay = day;
  }
  internalDay: number = 0;

  aocResponse?: AOCResponse | undefined;
  isOpen: boolean = false;

  constructor(private aocService: WindowService) {  }

  open() {
    this.isOpen = true;
    this.getAOCResponse();
  }

  getAOCResponse() {
    let callPath = environment.aocPath + '/' + this.internalYear + '/' + this.internalDay

    this.aocService.getAOCAnswer(callPath)
      .subscribe(aocResponse => {
        this.aocResponse = aocResponse;
      }, error => {
        console.error(error);
        this.aocResponse = { answer: 'Failed' }
      });
  }
}

