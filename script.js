// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordInpt = {
  length: 0,
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

var validChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  getUserInput();
  //Validate input
  passwordInpt = validateInput(passwordInpt);

  if (passwordInpt.validLength && passwordInpt.validType) {
    //Generate Password
    var password = generatePassword();
    //Output Password
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function validateInput(password) {
  if (password.length > 8 || password.length <= 128) {
    password.validLength = true;
  }
  if (
    password.lower === false ||
    password.upper === false ||
    password.numeric === false ||
    password.special === false
  ) {
    password.validType = true;
  }
  if (!passwordInpt.validLength) {
    alert("You must select a length between 8-128");
  }
  if (!passwordInpt.validType) {
    alert("You must select at least one valid type");
  }
  return password;
}

function randNum() {
  var index = Math.floor(Math.random() * validChars.length);
  return index;
}

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function containsNumbers(str) {
  const numbers = 1234567890;
  return numbers.test(str);
}

function containsUpper(str) {
  const upper = ABCDEFGHIJKLMNOPQRSTUVWXYZ;
  return upper.test(str);
}

function containsLower(str) {
  const lower = abcdefghijklmnopqrstuvwxyz;
  return lower.test(str);
}

function generatePassword(length, lower, upper, numeric, special) {
  var generatedPassword = "";
  var tempchar = "";
  do {
    tempchar = validChars[randNum];
    if (lower && containsLower(tempchar)) {
      generatePassword = generatePassword + tempchar;
    } else if (upper && containsUpper) {
      generatePassword = generatePassword + tempchar;
    } else if (numeric && containsNumbers) {
      generatePassword = generatePassword + tempchar;
    } else if (special && containsSpecialChars) {
      generatePassword = generatePassword + tempchar;
    }
  } while (generatedPassword.length < length);
  return generatedPassword;
}

function getUserInput() {
  //Input prompts
  prompt("Choose Password Length (8-128)", passwordInpt.length);
  prompt("Lower Case Allowed? (Y/N)", allowLower);
  //update the correct boolean on Y
  if (allowLower === "Y") {
    passwordInpt.lower = true;
  }
  prompt("Upper Case Allowed? (Y/N)", allowUpper);
  if (allowUpper === "Y") {
    passwordInpt.upper = true;
  }
  prompt("Numeric Case Allowed? (Y/N)", allowNumeric);
  if (allowNumeric === "Y") {
    passwordInpt.numeric = true;
  }
  prompt("Special Case Allowed? (Y/N)", allowSpecial);
  if (allowSpecial === "Y") {
    passwordInpt.special = true;
  }
  console.log(passwordInpt);
}
