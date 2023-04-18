
var password=document.querySelector("password");

function gatherPromptsForPassword() {
  let passwordLength = prompt('How many characters should your password be? (must be between 8 and 128)');
  
  if(passwordLength >= 8 && passwordLength <= 128) {
    let includeUppercase = confirm('Will the password contain uppercase letters? (Cancel for no uppercase)');
    let includeLowerCase = confirm('Will the password contain lowercase letters? (Cancel for no lowercase)');
    let includeNumeric = confirm('Will the password contain numeric values? (Cancel for no numeric)');
    let includeSpecialCharacters = confirm('Will the password contain special characters? (Cancel for no special)');
    
    console.log(includeUppercase , includeLowerCase, includeNumeric, includeSpecialCharacters);

    // // Generate the password based on the above variable information.
    //this will run the function above to generate password - which in turn should run the prompts function. 
    if (includeUppercase) {
    	generateAllCapsPassword();
    } else {
    		generatePassword(12, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    
  } else {
    alert('You must enter a value between 8-128!');
  }
}

//trying new method here. pulling all characters into one string. will have to figure out how to divy them out based on user preference later.
function generatePassword(userlength, charType) {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 12;
  let password = "";
  
 	for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
  
  document.getElementById("password").value = password;
}


function generateAllCapsPassword() {
  let chars = charTypeBuilder();
  let passwordLength = 6;
  let password = "";
  
  
 	for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);


// still broken somewhere here
   function charTypeBuilder() {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lowercase = "abcdefghijklmnopqrstuvwxyz";
    numbers  = "0123456789";
    special = "!@#$%^&*()";

    if(includeUpperCase) {
      charList = uppercase;
      console.log(charList);
    }
  
    if(includeLowerCase) {
      charList = lowercase;
      console.log(charList);
    }
  
    if(includeNumeric) {
      charlist = numbers;
      console.log(charList);
    }
  
    if(includeSpecialCharacters) {
      charlist = special;
      
      console.log(charList);
    }
  
    return charList;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);