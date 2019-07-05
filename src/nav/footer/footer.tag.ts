import { Component } from '@angular/core';

import { links } from '../model/links';

@Component({
  selector: 'n-footer',
  templateUrl: './footer.tag.html',
  styleUrls: ['./footer.tag.sass']
})
export class NavFooterTag {
  links = links;
}
