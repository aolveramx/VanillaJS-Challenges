/* 
  EVEN & ODD SUMS
  Take in an array and return an array of the sums of even and odd numbers 
  ex.evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
  https://youtu.be/tcoiPHktCwQ
*/

function evenOddSums(array) {

  let evenSum = 0
  let oddSum = 0

  array.forEach( number => ( 
    number % 2 === 0 
    ? (evenSum += number) 
    : ( oddSum += number )  
  ))

  return [ evenSum, oddSum ]

}


// Call Function
const output = evenOddSums([50, 60, 60, 45, 71]);

console.log(output);