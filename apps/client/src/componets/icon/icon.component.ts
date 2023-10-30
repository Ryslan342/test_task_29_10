import {Component, HostBinding, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'client-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() size: number = 20;

  @HostBinding("style.--size")
  get sizePx() {
    return this.size + "px";
  }
}
