
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password !== undefined) {
    passwordText.value = password;
  } else {
    return
  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function generatePassword() {
  let passwordLength = prompt('How many characters should you password be? (must be between 8 and 128)');
  if(passwordLength >= 8 && passwordLength <= 128) {
    let passwordHasUppercase = confirm('Will the password contain uppercase letters? (Cancel for no uppercase)');
    let passwordHasLowerCase = confirm('Will the password contain lowercase letters? (Cancel for no lowercase)');
    let passwordHasNumeric = confirm('Will the password contain numeric values? (Cancel for no numeric)');
    let passwordHasSpecialCharacters = confirm('Will the password contain special characters? (Cancel for no special)');
    console.log(passwordHasUppercase , passwordHasLowerCase, passwordHasNumeric, passwordHasSpecialCharacters);

    // // Generate the password based on the above variable information.
 

    if(passwordHasUppercase && passwordHasLowerCase) {
      var password = getRandomNumber(8, 128);
    } else {
      var password = 'Your password is going to be ' + passwordLength + ' characters long';
    }
    return password;
  } else {
    alert('You must enter a value between 8-128!');
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);