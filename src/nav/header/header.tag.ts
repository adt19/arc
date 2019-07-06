import { HostBinding, Component } from '@angular/core';

import { links } from '../model/links';

@Component({
  selector: 'n-header',
  templateUrl: './header.tag.html',
  styleUrls: ['./header.tag.sass', './mobile.sass']
})
export class NavHeaderTag {
  links = links;
  on = false;
  toggle() {
    this.on = !this.on;
  }
  find(e) {

  }
}
