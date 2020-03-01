import getAge from '../utils/getAge';

test('display 20 when entering 2000', () => {
  const date  = '2000-02-21';
  const expected = 20;
  expect(getAge(date)).toBe(expected); 
});