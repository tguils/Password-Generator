
var password = document.querySelector("password");
//when to use var vs let vs const
function gatherPromptsForPassword() {
  
  let passwordLength = prompt('How many characters should your password be? (must be between 8 and 128)');
  
  if(passwordLength >= 8 && passwordLength <= 128) {
    let charList = "";

    let includeUppercase = confirm('Will the password contain uppercase letters? (Cancel for no uppercase)');
      
      if(includeUpperCase) {
        charList += uppercase;
        console.log(charList);
      }
  
    let includeLowerCase = confirm('Will the password contain lowercase letters? (Cancel for no lowercase)');
      if(includeLowerCase) {
        charList += lowercase;
        console.log(charList);
      }
  
    let includeNumeric = confirm('Will the password contain numeric values? (Cancel for no numeric)');
      if(includeNumeric) {
        charlist = numbers;
        console.log(charList);
      }
    let includeSpecialCharacters = confirm('Will the password contain special characters? (Cancel for no special)');
      if(includeSpecialCharacters) {
        charlist = special;
        console.log(charList);
      }
  
    return charList;
  }

    function generatePassword() {
      let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let passwordLength = 6;
      let password = "";
      
       for (let i = 0; i <= passwordLength; i++) {
       let randomNumber = Math.floor(Math.random() * chars.length);
       password += chars.substring(randomNumber, randomNumber +1);
      }
      
      document.getElementById("password").value = password;
    }

    //this will run the function above to generate password - which in turn should run the prompts function. 
    generatePassword();
    
  } else {
    alert('You must enter a value between 8-128!');
  }
}

// is this function necessary? - where else can I add these variables?
   function charTypeBuilder() {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lowercase = "abcdefghijklmnopqrstuvwxyz";
    numbers  = "0123456789";
    special = "!@#$%^&*()";
    let charList = "";
   }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);