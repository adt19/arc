import { HostBinding, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ItemsCtrl } from './items.ctrl';

@Component({
  selector: 'n-base',
  templateUrl: './base.tag.html',
  styleUrls: ['./base.tag.sass', './mobile.sass'],
  providers: [ItemsCtrl, BreakpointObserver]
})
export class NewsBaseTag {
  @HostBinding('class.mobile') mobile = false;
  get ic() {
    return this._ic;
  }
  query = '';
  loading = false;
  constructor(
    private ar: ActivatedRoute,
    private _ic: ItemsCtrl,
    bos: BreakpointObserver) {
    bos.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.mobile = result.matches;
    });
    ar.queryParams.subscribe(q => {
      this.query = q.q;
      this.load({ reset: true, page: 1 });
    });
  }
  load(q = {}) {
    if (this.loading) { return; }
    this.loading = true;
    this.ic.load({ query: this.query, ...q }).subscribe(_ => {
      this.loading = false;
    });
  }
}
