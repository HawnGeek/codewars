// http://www.codewars.com/kata/count-the-likes

var evalLikes = function(words){
  return words.filter(w=>/^like$/i.test(w)).length/words.length>0.05
}