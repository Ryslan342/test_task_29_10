import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropDownOptionComponent, IDropDownListOption} from "./drop-down-option/drop-down-option.component";

@Component({
  selector: 'client-drop-down-list',
  standalone: true,
  imports: [CommonModule, DropDownOptionComponent],
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss'],
})
export class DropDownListComponent {
  @Input() options: IDropDownListOption[] = [];
  @Input() selected?: IDropDownListOption;
}
