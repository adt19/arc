import { Input, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Item } from '../model/item';

@Component({
  selector: 'n-item',
  templateUrl: './item.tag.html',
  styleUrls: ['./item.tag.sass', './mobile.sass'],
  providers: [BreakpointObserver]
})
export class NewsItemTag extends Item {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  constructor(bos: BreakpointObserver) {
    super();
    bos.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.renderDate(result.matches);
    });
  }
}
