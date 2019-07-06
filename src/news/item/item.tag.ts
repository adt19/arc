import { Input, Component } from '@angular/core';

import { fmtDt } from './fmt-dt';

@Component({
  selector: 'n-item',
  templateUrl: './item.tag.html',
  styleUrls: ['./item.tag.sass', './mobile.sass']
})
export class NewsItemTag {
  @Input() set data(v) {
    Object.assign(this, v);
  }
  title = 'Title';
  /* tslint:disable-next-line:max-line-length */
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
  set updatedAt(v) {
    this.updatedAtStr = fmtDt(new Date(v * 1000));
  }
  updatedAtStr = '';

  constructor() {
    this.updatedAt = 1562409633;
  }
}
