import { fmtDt } from './fmt-dt';

export class Item {
  title = '';
  img = '';
  desc = '';
  set updatedAt(v) {
    this._updatedAt = v;
    this.updatedAtStr = fmtDt(new Date(v * 1000));
  }
  updatedAtStr = '';
  private _updatedAt;
  constructor(o?) {
    Object.assign(this, o);
  }
  renderDate(short = false) {
    this.updatedAtStr = fmtDt(new Date(this._updatedAt * 1000), short);
  }
}
