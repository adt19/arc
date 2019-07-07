import { Input, EventEmitter, Output, HostBinding, Component } from '@angular/core';

import { links } from '../model/links';

@Component({
  selector: 'n-header',
  templateUrl: './header.tag.html',
  styleUrls: ['./header.tag.sass', './mobile.sass']
})
export class NavHeaderTag {
  @Input() query = '';
  @Output() event = new EventEmitter();
  links = links;
  on = false;
  toggle() {
    this.on = !this.on;
  }
  find(e) {
    this.event.emit(e);
  }
}
