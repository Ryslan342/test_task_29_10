import {Component, Input} from '@angular/core';

export interface IDropDownListOption {
  text: string,
}

@Component({
  standalone: true,
  selector: 'client-drop-down-option',
  templateUrl: './drop-down-option.component.html',
  styleUrls: ['./drop-down-option.component.css']
})
export class DropDownOptionComponent {
  @Input() option?: IDropDownListOption;
}
