import { Component } from '@angular/core';

@Component({
  selector: 'n-base',
  templateUrl: './base.tag.html',
  styleUrls: ['./base.tag.sass']
})
export class NewsBaseTag {
  items = Array.from({ length: 6 });
}
