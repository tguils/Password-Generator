
// when to use var vs let vs const
function gatherPromptsForPassword() {
  let passwordLength = prompt('How many characters should your password be? (must be between 8 and 128)');
  
  if(passwordLength >= 8 && passwordLength <= 128) {
    let charList = "";
    
    let includeUpperCase = confirm('Will the password contain uppercase letters? (Cancel for no uppercase)');
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(includeUpperCase) {
        charList += uppercase;
        console.log(charList);
      }
  
    let includeLowerCase = confirm('Will the password contain lowercase letters? (Cancel for no lowercase)');
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
      if(includeLowerCase) {
        charList += lowercase;
        console.log(charList);
      }
  
    let includeNumeric = confirm('Will the password contain numeric values? (Cancel for no numeric)');
    let numbers  = "0123456789";
      if(includeNumeric) {
        charlist += numbers;
        console.log(charList);
      }
      
    let includeSpecialCharacters = confirm('Will the password contain special characters? (Cancel for no special)');
    let special = "!@#$%^&*()";
      if(includeSpecialCharacters) {
        charlist += special;
        console.log(charList);
      }
    
        for (let i = 0; i <= passwordLength; i++) {
         let randomNumber = Math.floor(Math.random() * charList.length);
         // Taken from https://dev.to/code_mystery/random-password-generator-using-javascript-6a
         password += charList.substring(randomNumber, randomNumber +1);
        }
        document.getElementById("password").value = password; /* get element by id is same as query selector. This is taking the "password" from the html and setting the value (.value) to the variable password
        which is += to the random character selected from teh charList - using the substring method*/

    
    
    document.getElementById("password").value = password; //error reading "charList undefined" figure out why.

  } else {
    alert('You must enter a value between 8-128!');
  }
}

// STILL NEED create alert when none of the character selections are chosen

