import { CalcTimeAgoPipe } from './calc-time-ago.pipe';

describe('CalcTimeAgoPipe', () => {
  let pipe: CalcTimeAgoPipe;

  beforeEach(() => {
    pipe = new CalcTimeAgoPipe();
  });

  it('Test 1: create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Test 2: show "5 months ago"', () => {
    const date = new Date();
    const oldDate = new Date(date.setMonth(date.getMonth() - 5));
    const result = pipe.transform(oldDate);

    expect(result).toEqual('5 months ago');
  });

  it('Test 2: show "1 year ago"', () => {
    const date = new Date();
    const oldDate = new Date(date.setMonth(date.getMonth() - 12));
    const result = pipe.transform(oldDate);

    expect(result).toEqual('1 year ago');
  });
});
