// http://www.codewars.com/kata/remove-method-in-arrays

Array.prototype.remove = function(n) {
  if (n === +n && n > 0)
    this.splice(n, 1);
}