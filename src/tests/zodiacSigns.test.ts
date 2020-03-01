import getZodiacSign from '../utils/zodiacSigns';

test('display leo when entering 2000-08-21', () => {
  const date  = '2000-08-21';
  const expected = 'leo';
  expect(getZodiacSign(date)).toBe(expected);
});