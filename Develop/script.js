// Assignment code here

// variables of the different characteristics of the password
var pickUpperCase;
var pickLowerCase;
var pickNumber;
var pickSymbol;

upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","S","T","U","V","W","X","Y","Z"];
lowerCase = ["a","b","c","e","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
number = ["0","1","2","3","4","5","6","7","8","9"];
symbol = ["@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."];



var choice;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword () {
// promt to establish the password length
  var pwLength = prompt("Please choose the length of your password? (between 8 and 128 characters)");
  
  if (pwLength < 8 || pwLength > 128) {
     alert("Please choose a number between 8 and 128.");
     return ""
//prompts for confirming characteristics of the password
  } else {
     pickUpperCase = confirm("Would you like to include uppercase letters?");
     pickLowerCase = confirm("Would you like to also include lowercase letters?");
     pickNumber = confirm("Would you like to include numbers?");
     pickSymbol = confirm("Would you like to include symbols?");
  }
// if no options are selected when promted
  if (!pickUpperCase && !pickLowerCase && !pickNumber && !pickSymbol) {
    alert("You must choose at least 1 criteria to generate a password");
    return ""
  // If all 4 options are included
  } else if (pickUpperCase && pickLowerCase && pickNumber && pickSymbol) {
    choice = symbol.concat(upperCase, lowerCase, number,);

  // if 3 options are included
  } else if (pickUpperCase && pickLowerCase && pickNumber) {
    choice = upperCase.concat(lowerCase, number);
    
  } else if (pickUpperCase && pickLowerCase && pickSymbol) {
    choice = upperCase.concat(lowerCase, symbol);

  } else if (pickUpperCase && pickNumber && pickSymbol) {
    choice = upperCase.concat(number, symbol);

  } else if (pickLowerCase && pickNumber && pickSymbol) {
    choice = lowerCase.concat(number, symbol);
  }
  // if 2 options are included
    else if (pickUpperCase && pickLowerCase) {
    choice = upperCase.concat(lowerCase);
  
  } else if (pickUpperCase && pickNumber) {
    choice = upperCase.concat(number);

  } else if (pickUpperCase && pickSymbol) {
    choice = upperCase.concat(symbol);

  } else if (pickLowerCase && pickNumber) {
    choice = lowerCase.concat(number);

  } else if (pickLowerCase && pickSymbol) {
    choice = lowerCase.concat(symbol);

  } else if (pickNumber && pickSymbol) {
    choice = number.concat(symbol);
  }
// if only 1 option is included
    else if (pickUpperCase) {
    choice = upperCase;

  } else if (pickLowerCase) {
    choice = lowerCase;

  } else if (pickNumber) {
    choice = number;

  } else if (pickSymbol) {
    choice = symbol;
  }
  
  var password = []

  for (var i = 0; i < pwLength; i++) {
    var pickChoices = choice[Math.floor(Math.random()* choice.length)];
    password.push(pickChoices);

  }

  var ps = password.join("");
  UserInput (ps);
  console.log(password)
  return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}


