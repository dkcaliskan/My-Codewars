
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces

// link = https://www.codewars.com/kata/54ff3102c1bad923760001f3


function getCount(str) {
  return Object.values(str).filter(x => ["a", "e", "i", "o", "u"].includes(x.toLowerCase())).length;
};


