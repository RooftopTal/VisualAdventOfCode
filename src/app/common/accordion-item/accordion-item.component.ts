import { Component, Input } from '@angular/core';

@Component({
  selector: 'aoc-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent {
  @Input('itemName') itemName = '';
  @Input() itemLabel: string = '';
  @Input() itemContent: string = '';
}
