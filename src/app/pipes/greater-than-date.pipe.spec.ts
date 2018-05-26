import { GreaterThanDatePipe } from './greater-than-date.pipe';

describe('GreaterThanDatePipe', () => {
  it('create an instance', () => {
    const pipe = new GreaterThanDatePipe();
    expect(pipe).toBeTruthy();
  });
});
