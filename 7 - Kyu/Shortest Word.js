
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// link = https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9




function findShort(s){
  let x = s.split(" ")
  let words = x.map(function(str){
    return str.length
  });
  return Math.min(...words)
}
