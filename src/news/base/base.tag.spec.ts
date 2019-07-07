import { Spec } from '@chakray/utils/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { fakeAsync, flush, tick, discardPeriodicTasks } from '@angular/core/testing';
import { of } from 'rxjs';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NewsBaseTag as Tag } from './base.tag';

import { ItemsCtrl } from './items.ctrl';

class MockItemsCtrl {
  items = [];
  load(q) { return of(q); }
}

Spec.tag(Tag, {
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    RouterTestingModule
  ],
  override: {
    providers: [
      { provide: ItemsCtrl, useClass: MockItemsCtrl }
    ]
  }
}, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
  ref.prop('ic', () => {
    it ('should return ctrl', () => {
      expect(t.ic.items.length).toEqual(0);
    });
  });
  ref.prop('load(q)', () => {
    it('can call with empty args', fakeAsync(() => {
      t.load();
      expect(t.loading).toEqual(false);
    }));
    it('set loading to true', fakeAsync(() => {
      t.load({ a: 1 });
      expect(t.loading).toEqual(false);
    }));
    it('does nothing with is loading', () => {
      t.loading = true;
      t.load({ a: 1 });
      expect(t.loading).toEqual(true);
    });
  });
});
