import { Component, Input } from '@angular/core';
import { environment } from './../../environment';
import { AOCResponse } from './aoc-response';
import { WindowService } from './window.service';

@Component({
  selector: 'aoc-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  @Input() year: number = 0;
  @Input() day: number = 0;
  aocResponse?: AOCResponse | undefined;
  isOpen: boolean = false;

  constructor(private aocService: WindowService) {  }

  open() {
    this.isOpen = true;
    this.getAOCResponse();
  }

  getAOCResponse() {
    let callPath = environment.aocPath + '/' + this.year + '/' + this.day

    this.aocService.getAOCAnswer(callPath)
      .subscribe(aocResponse => {
        this.aocResponse = aocResponse;
      }, error => {
        console.error(error);
        this.aocResponse = { answer: 'Failed' }
      });
  }
}

