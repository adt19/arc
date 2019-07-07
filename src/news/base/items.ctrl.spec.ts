import { Spec } from '@chakray/utils/testing';

import { ItemsCtrl as Pdr } from './items.ctrl';

Spec.pdr(Pdr, {}, (ref) => {
  let t: Pdr;
  beforeEach(() => {
    t = ref.pdr;
  });
  ref.prop('load', () => {
    it('return observable', (done) => {
      t.load({ query: '', page: 0 }).subscribe(d => {
        expect(d.length).toEqual(15);
        done();
      });
    });
    describe('when reset is true', () => {
      it('will refresh items', (done) => {
        t.items = [1, 2, 3] as any;
        t.load({ reset: true, page: 1 }).subscribe(d => {
          expect(t.items.length).toEqual(15);
          done();
        });
      });
    });
  });
});
