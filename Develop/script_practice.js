// Assignment code here

function makePassword(maxLengthPass) {
  var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var generatedPassword = "";
  var size = collectionOfLetters.length;
  for (var i = 0; i < maxLengthPass; ++i) {
     generatedPassword = generatedPassword + collectionOfLetters.charAt(Math.floor(Math.random() * size));
  }
  return generatedPassword;
}
console.log(makePassword(5));


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
