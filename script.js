// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordInpt = {
  length: 0,
  lower: false,
  upper: false,
  numeric: false,
  special: false,
  validLength: false,
  validType:false,
};
var validChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","^","_","`","{","|","}","~"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function validateInput(passwordInpt){
  if (passwordInpt.length<8 || passwordInpt.length >128){
      passwordInpt.validLength=false;
    }
    if (passwordInpt.lower ===false ||passwordInpt.upper===false ||passwordInpt.numeric===false||passwordInpt.special===false){
      passwordInpt.validType=false;
    }
  return passwordInpt;
};

function randNum() {
  var index = Math.floor(Math.random() * validChars.length);;
  return index;
};

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
};

function containsNumbers(str) {
  const numbers = 1234567890;
  return numbers.test(str);
};

function containsUpper(str) {
  const uppper = ABCDEFGHIJKLMNOPQRSTUVWXYZ;
  return upper.test(str);
};

function containsLower(str) {
  const lower = abcdefghijklmnopqrstuvwxyz;
  return lower.test(str);
};



function generatePassword(length, lower, upper, numeric, special) {
  var generatedPassword="";
  var tempchar="";
  do {
    tempChar = validChars[randNum];
    if(lower && containsLower(tempchar)){
      generatePassword = generatePassword + tempchar;
    } else if (upper && containsUpper){
      generatePassword = generatePassword + tempchar;
    } else if (numeric && containsNumbers) {
      generatePassword = generatePassword + tempchar;
    } else if (special&&containsSpecialChars){
      generatePassword = generatePassword + tempchar;
    }
  } while (generatedPassword.length<length);
    return generatedPassword
};
