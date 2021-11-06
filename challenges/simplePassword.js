/* 
  Simple Password
  Have the function SimplePassword (str) take the str parameter
  being passed and determine if it passes as a valid password that follows
  the list of constraints:

  1. It must have a capital letter.
  2. It must contain at least one number.
  3. It must contain a punctuation mark or mathematical symbol.
  4. It cannot have the word *password* in the string.
  5. It must be longer than 7 characters and shorter than 31 characters.

  If all the above constraints are met within the string, the your program
  should return the string true, otherwise your program should return the
  string false. For example: if str is "apple!M7" then your program should
  return "true"
  https://stackoverflow.com/questions/62727011/javascript-functions-that-validates-password-coderbyte-coding-challenge-simple
*/

function simplePassword(str) {
  
  let charCheck = str.length > 7 && str.length < 31;
  let capitalCheck = /[A-Z]/g.test(str);
  let numberCheck = /[0-9]/g.test(str);
  let passwordCheck = !/password/gi.test(str);
  let punctuationCheck = /[.?!:,;]/g.test(str);

  return charCheck && punctuationCheck && capitalCheck && numberCheck && passwordCheck;
}

// Call Function
const output = simplePassword('apple!M7');

console.log(output);