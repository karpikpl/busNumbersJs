/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */

import {
  describe, it
}
from 'mocha';
import {
  expect
}
from 'chai';
import BusNumbers from '../src/BusNumbers';

describe('BusNumbers', () => {

  it('Can parse string', () => {
    const busnumbers = new BusNumbers('6', '180 141 174 143 142 175');
    const buses = busnumbers.parse();
    expect(buses.length).to.be.equal(6);
  });

  it('Can can find a solution for 180 141 174 143 142 175', () => {
    const busnumbers = new BusNumbers('6', '180 141 174 143 142 175');
    const result = busnumbers.solve();
    expect(result).to.be.equal('141-143 174 175 180');
  });

  it('Can can find a solution for 180 177 179 176 178 175', () => {
    const busnumbers = new BusNumbers('6', '180 177 179 176 178 175');
    const result = busnumbers.solve();
    expect(result).to.be.equal('175-180');
  });

  it('Can can find a solution for 145', () => {
    const busnumbers = new BusNumbers('1', '145');
    const result = busnumbers.solve();
    expect(result).to.be.equal('145');
  });

  it('Can can find a solution for 8 6 114 3 1 115', () => {
    const busnumbers = new BusNumbers('6', '8 6 114 3 1 115');
    const result = busnumbers.solve();
    expect(result).to.be.equal('1 3 6 8 114 115');
  });

  it('Can can find a solution for 8 6 114 3 1', () => {
    const busnumbers = new BusNumbers('5', '8 6 114 3 1');
    const result = busnumbers.solve();
    expect(result).to.be.equal('1 3 6 8 114');
  });

  it('Can can find a solution for 8 6 2 4 3 1 7', () => {
    const busnumbers = new BusNumbers('7', '8 6 2 4 3 1 7');
    const result = busnumbers.solve();
    expect(result).to.be.equal('1-4 6-8');
  });

  it('Can can find a solution for 568 8', () => {
    const busnumbers = new BusNumbers('2', '568 8');
    const result = busnumbers.solve();
    expect(result).to.be.equal('8 568');
  });
});
