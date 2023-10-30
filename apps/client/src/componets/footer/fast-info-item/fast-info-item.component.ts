import {Component, Input} from '@angular/core';

@Component({
  selector: 'client-fast-info-item',
  templateUrl: './fast-info-item.component.html',
  styleUrls: ['./fast-info-item.component.scss']
})
export class FastInfoItemComponent {
  @Input()
  icon: string = "";

  @Input()
  title: string = "";
}
