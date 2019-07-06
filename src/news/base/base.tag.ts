import { HostBinding, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'n-base',
  templateUrl: './base.tag.html',
  styleUrls: ['./base.tag.sass', './mobile.sass'],
  providers: [BreakpointObserver]
})
export class NewsBaseTag {
  items = Array.from({ length: 6 });
  @HostBinding('class.mobile') mobile = false;
  constructor(bos: BreakpointObserver) {
    bos.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.mobile = result.matches;
    });
  }
}
