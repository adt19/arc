import { Spec } from '@chakray/utils/testing';

import { NavHeaderTag as Tag } from './header.tag';

Spec.t(Tag, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
  ref.prop('toggle()', () => {
    it('revert tag.on value', () => {
      expect(t.on).toBeFalsy();
      t.toggle();
      expect(t.on).toBeTruthy();
    });
  });
  ref.prop('find(e)', () => {
    it('emit event', () => {
      const spi = spyOn(t.event, 'emit').and.callFake(() => {});
      t.find('a');
      expect(spi).toHaveBeenCalled();
    });
  });
});
