/*
VALIDATE A PALINDROME
Return true if palindrome and false if not
ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
https://youtu.be/M2bJBuaOeOQ
*/

function isPalindrome(str) {

  const s1 = str.split('').join()
  const s2 = str.split('').reverse().join('')
  return s1 === s2 ? true : false

}

function isPalindrome1(str) {

  const revString = str.split('').reverse().join('')
  return revString === str

}

// Call Function
const output = isPalindrome1('racecar');

console.log(output);