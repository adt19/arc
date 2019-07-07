import { Spec } from '@chakray/utils/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NavFindTag as Tag } from './find.tag';

Spec.tag(Tag, {
  schemas: [NO_ERRORS_SCHEMA],
}, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
  ref.prop('trigger()', () => {
    it('to emit event', () => {
      t.event.subscribe(e => {
        expect(e).toEqual({ type: 'find', data: { text: '' }});
      });
      t.trigger();
    });
  });
  ref.prop('update(e)', () => {
    it('update query to e.target.value', () => {
      const e = { target: { value: 'aaa' }};
      t.update(e);
      expect(t.query).toEqual('aaa');
    });
  });
  ref.prop('kd(e)', () => {
    let spi;
    beforeEach(() => {
      spi = spyOn(t, 'trigger').and.callFake(() => {});
    });
    it('when e.key.toLowerCase() is "enter"', () => {
      const e = { key: 'Enter' };
      t.kd(e);
      expect(spi).toHaveBeenCalled();
    });
    it('when e.key.toLowerCase() is not "enter"', () => {
      const e = { key: 'Escape' };
      t.kd(e);
      expect(spi).not.toHaveBeenCalled();
    });
  });
});
