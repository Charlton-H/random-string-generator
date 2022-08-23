// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

var upperChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var lowerChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = '~`!#$%^&*+=-[]\\\';,/{}|":<>?';

function generatePassword() {
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var numbers = document.querySelector('#digits').checked;

  var lowerCases = document.querySelector('#lowercase').checked;
  var upperCases = document.querySelector('#uppercase').checked;
  var special = document.querySelector('#specialchar').checked;

  var possibleValues = '';

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (numbers) {
    possibleValues += nums.join('');
  }

  if (lowerCases) {
    possibleValues += lowerChars.join('');
  }

  if (upperCases) {
    possibleValues += upperChars.join('');
  }

  if (special) {
    possibleValues += specialChars;
  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  var randomPasswordGenerated = '';
  // console.log(possibleValues);

  // loop adding random characters
  for (var i = 0; i < passwordLength; i++) {
    randomPasswordGenerated += possibleValues.charAt(
      Math.floor(Math.random() * possibleValues.length)
    );
  }

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  return randomPasswordGenerated;
}
