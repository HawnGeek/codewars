// http://www.codewars.com/kata/convert-string-to-camel-case/solutions/javascript/me

const toCamelCase = (s) => s.replace(/[_-](\w)/g, (m, m1) => m1.toUpperCase());
