const { isPalindrome } = require('./palindrome');

describe('isPalindrome', () => {
  test('kata sederhana palindrome', () => {
    expect(isPalindrome('level')).toBe(true);
  });

  test('kata bukan palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('mengabaikan huruf besar/kecil', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('mengabaikan spasi dan tanda baca', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('string kosong dianggap palindrome', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('single character dianggap palindrome', () => {
    expect(isPalindrome('x')).toBe(true);
  });

  test('bukan string mengembalikan false', () => {
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(12321)).toBe(false);
  });

  test.each([
    ['No lemon, no melon', true],
    ['Was it a car or a cat I saw?', true],
    ['Not a palindrome', false],
  ])('"%s" -> %s', (input, expected) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});