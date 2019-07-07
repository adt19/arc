import { Spec } from '@chakray/utils/testing';

import { NavFooterTag as Tag } from './footer.tag';

Spec.t(Tag, (ref) => {
  let t: Tag;
  beforeEach(() => {
    t = ref.tag;
  });
});
