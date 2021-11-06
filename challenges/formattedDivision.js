/* Have the function FormattedDivision (num1, num2) take both
parameters being passed, divide num1 by num2, and return the result as a
string with properly formatted commas and 4 significant digits after the
decimal place. For example: if num1 is 123456789 and num2 is 10000
the output should be "12,345.6789". The output must contain a number
in the one's place even If it is a zero.
https://github.com/jackmcd4/CoderByte-Medium-Problems/blob/master/Formatted%20Division
*/

function formattedDivision( num1,num2 ) {

  const div = parseFloat( num1 / num2 )
  const arr = div.toString().split("")
  const len = arr.length - 1  
  let dot = 0

  for ( let i = len; i > 0; i-- ) {

    if( arr[i] === "." ) {
      dot++
    }

  }

  if ( dot === 0 ){
    arr.push( ".", 0, 0, 0, 0 )
  }

  for ( let i = len; i > 0; i-- ) {

      if ( arr [ i + 3 ] === ".") {
        arr.splice( i, 0, "," )
      }

      if ( arr[ i + 3 ] === "," ) {
        arr.splice( i, 0, "," )
      }

  }

    return arr.join("") 
}

// Call Function
const output = formattedDivision(123456789, 10000);

console.log(output);