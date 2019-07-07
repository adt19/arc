import { Spec } from '@chakray/utils/testing';
import { inject } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppTag as Tag } from './app.tag';

Spec.tag(Tag, {
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    RouterTestingModule
  ],
}, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
  ref.prop('nav({ type, data })', () => {
    let spi;
    beforeEach(inject([Router], (r: Router) => {
      spi = spyOn(r, 'navigate').and.callFake(() => {});
    }));
    it('when type is not "find"', () => {
      t.nav({ type: 'a', data: {} });
      expect(spi).not.toHaveBeenCalled();
    });
    it('when type is "find"', () => {
      t.nav({ type: 'find', data: { text: 'a' }});
      expect(spi).toHaveBeenCalled();
    });
  });
});
