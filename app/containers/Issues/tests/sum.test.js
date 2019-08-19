import mocha from 'mocha';
import sum from '../sum';

mocha.setup('bdd');

describe('sum', function() {
  it('should return sum of arguments', function() {
    chai.expect(sum(1, 2)).to.equal(3);
  });
});
