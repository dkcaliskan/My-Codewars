// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.
// Examples

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// link = https://www.codewars.com/kata/5809b62808ad92e31b000031



function calculate(str) {
  let x = eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-'));
  return x.toString()
}
