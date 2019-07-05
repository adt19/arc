import { Component } from '@angular/core';

import { links } from '../model/links';

@Component({
  selector: 'n-header',
  templateUrl: './header.tag.html',
  styleUrls: ['./header.tag.sass']
})
export class NavHeaderTag {
  links = links;
}
