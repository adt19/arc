import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

import { Item } from '../model/item';
import { backend, pageSize } from '../backend';

@Injectable()
export class ItemsCtrl {
  items: Item[] = [];
  constructor() {}
  load({ query, page, reset = false }: any) {
    const p = {
      page: page ? (page - 1) : this.items.length / pageSize,
      query
    };
    return backend(p).pipe(catchError(e => {
      return [];
    }), tap(d => {
      this.items = reset ? d : this.items.concat(d);
    }));
  }
}
