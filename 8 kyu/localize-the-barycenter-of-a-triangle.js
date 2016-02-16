// http://www.codewars.com/kata/localize-the-barycenter-of-a-triangle/solutions/javascript/me

function barTriang(p1, p2, p3){
  return [
    +parseFloat((p1[0] + p2[0] + p3[0]) / 3).toFixed(4),
    +parseFloat((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)
  ];
}