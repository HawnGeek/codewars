// http://www.codewars.com/kata/swap-values/solutions/javascript/me

function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}