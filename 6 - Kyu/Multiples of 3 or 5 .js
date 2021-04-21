
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//     Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

// link = https://www.codewars.com/kata/514b92a657cdc65150000006


function solution(number){
  if (number > 0) {
    let nums = [...Array(number).keys()].filter(x => x % 3 === 0 || x % 5 === 0).reduce((a, b) => a + b, 0);
    return nums
  }
  else {
    return 0
  }
}
    
