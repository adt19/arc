import { Input, EventEmitter, Output, HostBinding, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'n-find',
  template: `
    <cti key='app.search' (click)='trigger()'></cti>
    <input [value]='text' (keydown)='kd($event)' maxlength='30'
      (input)='update($event)' placeholder='Search' />
  `,
  styleUrls: ['./find.tag.sass']
})
export class NavFindTag {
  @Input() text = '';
  @Output() event = new EventEmitter();
  query = '';
  constructor() {}
  trigger() {
    const data = { text: this.query };
    this.event.emit({ type: 'find', data });
  }
  update(e) {
    this.query = e.target.value;
  }
  kd(e) {
    const ek = e.key.toLowerCase();
    if (ek === 'enter') {
      this.trigger();
    }
  }
}
