// http://www.codewars.com/kata/return-a-strings-even-characters/solutions/javascript/me

const evenChars = s => s.length <= 1 || s.length >= 100 ? 'invalid string' : s.split('').filter((c, i) => (i & 1));