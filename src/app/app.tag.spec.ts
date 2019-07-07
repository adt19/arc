import { Spec } from '@chakray/utils/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
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
});
