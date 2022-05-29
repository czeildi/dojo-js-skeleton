const fizzbuzz = require('./dojo');

describe('fizzbuzz', () => {
  it('should return the number', () => {
    expect(fizzbuzz(2)).toEqual(2);
    expect(fizzbuzz(7)).toEqual(7);
  });

  it('should return "fizz" if number is divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual('fizz');
    expect(fizzbuzz(9)).toEqual('fizz');
  });
});
