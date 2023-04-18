
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  if(password !== undefined) {
    passwordText.value = password;
  } else {
    return
  }
}

//unclear where to use var vs let - using lets for now

//trying new method here. pulling all characters into one string. will have to figure out how to divy them out based on user preference later.
function generatePassword() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 6; //need to figure out how to make the length user picked instead
  let password = "";
  for(let i = 0; i <= passwordLength; i++){
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(random.Number, randomNumber +1);
  }
  document.querySelector("#password").value = password;
}


function generateAllCapsPassword() {
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 6;
  let password = "";
  
 	for (let i = 0; i <= passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);

//changed function name as I can still use this function but can't be same name as above
function gatherPromptsforPassword() {
  let passwordLength = prompt('How many characters should you password be? (must be between 8 and 128)');
  
  if(passwordLength >= 8 && passwordLength <= 128) {
    let passwordHasUppercase = confirm('Will the password contain uppercase letters? (Cancel for no uppercase)');
    let passwordHasLowerCase = confirm('Will the password contain lowercase letters? (Cancel for no lowercase)');
    let passwordHasNumeric = confirm('Will the password contain numeric values? (Cancel for no numeric)');
    let passwordHasSpecialCharacters = confirm('Will the password contain special characters? (Cancel for no special)');
    console.log(passwordHasUppercase , passwordHasLowerCase, passwordHasNumeric, passwordHasSpecialCharacters);

    // // Generate the password based on the above variable information.
    //this will run the function above to generate password - which in turn should run the prompts function. 
    generatePassword(); {
      else if (passwordHasUpperCase) {
        generateAllCapsPassword();
      }
  
      else {
    alert('You must enter a value between 8-128!');
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);