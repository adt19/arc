import { HostBinding, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.tag.html',
  styleUrls: ['./app.tag.sass', './mobile.sass'],
  providers: [BreakpointObserver]
})
export class AppTag {
  title = 'BRAND';
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
