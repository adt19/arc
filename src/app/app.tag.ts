import { HostBinding, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.tag.html',
  styleUrls: ['./app.tag.sass', './mobile.sass'],
  providers: [BreakpointObserver]
})
export class AppTag {
  title = 'BRAND';
  query = '';
  @HostBinding('class.mobile') mobile = false;
  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    bos: BreakpointObserver) {
    bos.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.mobile = result.matches;
    });
    ar.queryParams.subscribe(q => {
      this.query = q.q || '';
    });
  }
  nav({ type, data }) {
    if (type === 'find') {
      const queryParams = {
        q: data.text
      };
      this.router.navigate([], { queryParams });
    }
  }
}
