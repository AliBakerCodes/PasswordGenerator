// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordInpt = {
  len: 0,
  lower: false,
  upper: false,
  numeric: false,
  special: false,
  validLength: false,
  validType: false,
};
var allowLower = "";
var allowUpper = "";
var allowNumeric = "";
var allowSpecial = "";
var plen = 0;

var validChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","\/",":",";","<","=",">","?","@","\[","\]","\\","^","_","`","{","|","}","~"," ",];
 

// Write password to the #password input
function writePassword() {
  getUserInput();

  //Validate input
  validateInput(passwordInpt);

  if (passwordInpt.validLength && passwordInpt.validType) {
    //Generate Password
    var password = generatePassword(
      passwordInpt.len,
      passwordInpt.lower,
      passwordInpt.upper,
      passwordInpt.numeric,
      passwordInpt.special
    );

    //Output Password
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function validateInput(password) {
  if (password.len >= 8 && password.len <= 128) {
    password.validLength = true;
  } else {
    password.validLength = false;
  }
  if (
    password.lower != false ||
    password.upper != false ||
    password.numeric != false ||
    password.special != false
  ) {
    password.validType = true;
  } else {
    password.validType = false;
  }

  if (!passwordInpt.validLength) {
    alert("You must select a length between 8-128");
  }
  if (!passwordInpt.validType) {
    alert("You must select at least one valid type");
  }
}

function randNum() {
  var index = Math.floor(Math.random() * validChars.length);
  return index;
}

function containsSpecialChars(str) {
  var regex = /[ !\"#$%&\'()*+,-./:;<=>?@\[\\\]^_`{|}~]/;
  return regex.test(str);
}

function containsNumbers(str) {
  const regex = /^[0-9]+$/;
  return regex.test(str);
}

function containsUpper(str) {
  const regex = /[A-Z]/;
  return regex.test(str);
}

function containsLower(str) {
  const regex = /[a-z]/;
  return regex.test(str);
}

function generatePassword(length, lower, upper, numeric, special) {
  console.log("Generating Password");
  console.log(lower);
  var generated = "";
  var tempchar = "";
  var escapeChar = /[\'\"\[\]]/;
  do {
    tempchar = validChars[randNum()];
    console.log("tempch is: " + tempchar);
    console.log("lc " + (lower && containsLower(tempchar)));
    if (lower && containsLower(tempchar)) {
      generated = generated + tempchar;
    } else if (upper && containsUpper(tempchar)) {
      generated = generated + tempchar;
    } else if (numeric && containsNumbers(tempchar)) {
      generated = generated + tempchar;
    } else if (special && containsSpecialChars(tempchar)) {
      generated = generated + tempchar;
    }
  } while (generated.length < length);
  console.log(generated);
  return generated;
}

function getUserInput() {
  //Input prompts
  passwordInpt.len = prompt("Choose Password Length (8-128)");
  console.log(passwordInpt.len);
  allowLower = prompt("Lower Case Allowed? (Y/N)");
  console.log(allowLower);
  console.log(allowLower.toUpperCase());
  //update the correct boolean on Y
  if (allowLower.toUpperCase() == "Y") {
    passwordInpt.lower = true;
  }
  allowUpper = prompt("Upper Case Allowed? (Y/N)");
  console.log(allowUpper);
  if (allowUpper.toUpperCase() == "Y") {
    passwordInpt.upper = true;
  }
  allowNumeric = prompt("Numeric Case Allowed? (Y/N)");
  console.log(allowNumeric);
  if (allowNumeric.toUpperCase() == "Y") {
    passwordInpt.numeric = true;
  }
  allowSpecial = prompt("Special Case Allowed? (Y/N)");
  console.log(allowSpecial);
  if (allowSpecial.toUpperCase() == "Y") {
    passwordInpt.special = true;
  }
  console.log(passwordInpt);
}
