// http://www.codewars.com/kata/autocomplete-yay/solutions/javascript/me

const autocomplete = (i, d) => {
  i = i.replace(/[^a-z]/gi, '');
  
  return d.filter(e => e.match(new RegExp(`^${i}`, 'i'))).slice(0, 5);
};