import { describe, it, expect } from 'jest-lite';
import sum from './sum';

describe('481828735 sum', () => {
  it('481828735 should return sum of arguments', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('481828695 sum', () => {
  it('481828695 should return sum of arguments', () => {
    expect(sum(1, 2)).toBe(4);
  });
});
