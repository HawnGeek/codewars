// http://www.codewars.com/kata/recursive-reverse-string

var reverse = s => s.length > 1 ? reverse(s.slice(1)) + s[0] : s;