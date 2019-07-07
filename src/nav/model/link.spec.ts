import { Link as Sub } from './link';

describe(Sub.name, () => {
  let t: Sub;
  describe('when link is not given', () => {
    beforeEach(() => {
      t = new Sub('Abc');
    });
    it('use lowercased text as link', () => {
      expect(t.link).toEqual('abc');
    });
  });
  describe('when link is given', () => {
    beforeEach(() => {
      t = new Sub('Abc', '#');
    });
    it('use given link', () => {
      expect(t.link).toEqual('#');
    });
  });
});
