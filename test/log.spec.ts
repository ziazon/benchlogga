import { expect } from 'chai';

import { Benchlogga } from '../src/benchlogga';

describe('Benchlogga Instance', () => {
  it('should be an instance of Benchlogga', () => {
    expect(new Benchlogga()).to.be.an.instanceof(Benchlogga);
  });
});
