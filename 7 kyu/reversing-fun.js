// http://www.codewars.com/kata/reversing-fun

const flipNumber = (n) => {
  n = n.split('').reverse().join('');
  return n.slice(0, 1) + (n.length > 1 ? flipNumber(n.slice(1)) : '');
};