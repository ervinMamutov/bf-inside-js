import { pyramid } from "./pyramid.js";

describe('building upside down pyramid', () => {
  describe('default parameter', () => {
    it('text : "" ', () => {
      const returned = pyramid();
      expect(returned).toEqual('');
    });
  });
  describe('not empty string', () => {
    it('text : "q"', () => {
      const returned = pyramid('q');
      expect(returned).toEqual('q');
    });
    it('text : "qw"', () => {
      const returned = pyramid('qw');
      expect(returned).toEqual('qw\nw\n');
    });
    it('text : "qwerty"', () => {
      const returned = pyramid('qwerty');
      expect(returned).toEqual('qwerty\nwerty\nerty\nrty\nty\ny\n');
    });
  });
});
