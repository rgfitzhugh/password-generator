
const randomFunc ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateel.addEventListener('click', () => {
  const length = lengthel.value;

  console.log(length);
});

//copy password to clipboard
clipboardEl.addEventListener('click', () => {
  const password = resultel.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('password copied to clipboard!');

})

function generatePassword(lower, upper,number, symbol, length) {

// 1 init pw var
// 2. filter out unchecked types
// 3. loop over length call generator function for each type
// 4. add final pw to the pw var and return

let generatedPassword = '';

const typesCount = lower + upper + number + symbol;

const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
(item => Object.values(item)[0]);

if(typesCount === 0) {
  return '';
}

for(let i=0; i < length; i += typesCount) {
  typesArr.forEach(type => {
    const funcNmae =Object.keys(type)[0];

    generatedPassword += randomFun[funcName]();
  });
}
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
// Assignment code here
function getRandomLower() {
  string.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper() {
  string.fromCharCode(Math.floor(Math.random()*26)+65);
}


function getRandomNumber() {
  string.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol() {
  const symbols = '@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random())* symbols.length];
}

console.log(getRandomNumber());
// Get references to the #generate element


