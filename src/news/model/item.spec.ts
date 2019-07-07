import { Item as Sub } from './item';

describe(Sub.name, () => {
  let t: Sub;
  describe('updatedAt', () => {
    beforeEach(() => {
      jasmine.clock().mockDate();
      t = new Sub({ updatedAt: 1562508001 });
    });
    it('will render date', () => {
      expect(t.updatedAtStr).toEqual('07 July, 2019 14:00');
    });
  });
  describe('renderDate(short)', () => {
    describe('when short', () => {
      it('return short date', () => {
        t.renderDate(true);
        expect(t.updatedAtStr).toEqual('07 July, 14:00');
      });
    });
    describe('when not short', () => {
      it('defaults to long date', () => {
        t.renderDate();
        expect(t.updatedAtStr).toEqual('07 July, 2019 14:00');
      });
      it('return long date', () => {
        t.renderDate(false);
        expect(t.updatedAtStr).toEqual('07 July, 2019 14:00');
      });
    });
  });
});
