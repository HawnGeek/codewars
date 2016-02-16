// http://www.codewars.com/kata/binary-to-text-ascii-conversion/solutions/javascript/me

function binaryToString(b) {
  return b.replace(/[0-1]{8}/g, m => {
    return String.fromCharCode(parseInt(m, 2));
  });
}