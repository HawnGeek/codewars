// http://www.codewars.com/kata/the-span-function

function span(arr, predicate) {
  let success = true;
  return arr.reduce((a, c) => {
    success && (success = predicate(c));
    a[~~!success].push(c);
    return a;
  }, [[],[]]);
}