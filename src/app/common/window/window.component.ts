import { Component, Input } from '@angular/core';
import { environment } from './../../environment';
import { AOCResponse } from './aoc-response';
import { AOCService } from './window.service';

@Component({
  selector: 'aoc-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent {
  @Input() year: number = 0;
  @Input() day: number = 0;
  aocResponse?: AOCResponse | undefined;
  isOpen: boolean = false;

  constructor(private aocService: AOCService) {  }

  open() {
    this.getAOCResponse();
    this.isOpen = true;
  }

  getAOCResponse() {
    let callPath = environment.aocPath + '/' + this.year + '/' + this.day

    this.aocService.getAOCAnswer(callPath)
      .subscribe(resp => {
        this.aocResponse = { ...resp.body! };
      }, error => {
        console.error(error);
        this.aocResponse = { answer: 'Failed' }
      });
  }
}

