// http://www.codewars.com/kata/array2binary-addition

const arr2bin = a => a.some(x => typeof x !== 'number') ? false : a.reduce((x, y) => x + y, 0).toString(2);