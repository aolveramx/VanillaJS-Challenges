/*
REVERSE A STRING
Return a string in reverse
ex. reverseString('hello') === 'olleh'
https://youtu.be/M2bJBuaOeOQ
*/

function reverseString1(str) {

  return str
    .split('')
    .reverse()
    .join('')

}

function reverseString2(str) {

  let revString = ''
  for ( let i = str.length - 1; i >= 0; i-- ) {
    revString = revString + str[i];
  }
  return revString

}

function reverseString3(str) {

  let revString = ''
  for ( let i = 0; i <= str.length - 1; i++ ) {
    revString =  str[i] + revString;
  }
  return revString

}

function reverseString4(str) {
  
  let revString = ''
  for ( let element of str ) {
    revString =  element + revString;
  }
  return revString

}

function reverseString5(str) {
  
  let revString = ''
  str.split('').forEach(element => revString = element + revString)
  return revString

}

function reverseString6(str) {
  
  return str.split('').reduce((revString, element) => element + revString, '')
  
}

// Call Function
const output = reverseString6('hello');

console.log(output);