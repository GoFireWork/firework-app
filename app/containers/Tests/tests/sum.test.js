import sum from '../sum';

describe('sum', () => {
  it('481828735 should return sum of arguments', () => {
    window.chai.expect(sum(1, 2)).to.equal(3);
  });
});
