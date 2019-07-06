import { HostBinding, Component } from '@angular/core';

@Component({
  selector: 'n-find',
  template: `
    <cti key='app.search'></cti>
    <input placeholder='Search' />
  `,
  styleUrls: ['./find.tag.sass']
})
export class NavFindTag {
}
