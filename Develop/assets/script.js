

var password = document.querySelector("#password");

//when to use var vs let vs const
function gatherPromptsForPassword() {
  console.log('on click works');
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

    // document.getElementById("password").value = password;

  } else {
    alert('You must enter a value between 8-128!');
  }
}
