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

var validUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var validLower = "abcdefghijklmnopqrstuvwxyz"
var validNumber ="1234567890"
var validSpecial =" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
 

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

//Validates password inputs. Throw an error if password number out of 8-128 range 
//or at least 1 character type not picked"
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
// Randomly select a number between 0 and the number of allowed characters
function randArray(charArray) {
  var index = Math.floor(Math.random() * charArray.length);
  return index;
}
//Randomly select a number between min and max inclusive
function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  };

//Generate the password
function generatePassword(length, lower, upper, numeric, special) {

  var generated = "";
  var lowerTest=false;
  var upperTest=false;
  var numericTest=false;
  var specialTest=false;
  var numOfArrays=0
  var uppercase =""
  var lowercase=""
  var numbers=""
  var specialChars=""
  var charTypeArray =[]
  // For each selected char type, create a string of the desired password length, then add that to the end of our charType array
  if (lower){
  for (i = 0; i < length; i++) {
    lowercase=lowercase+validLower.charAt(randNum(0,25));
  }
  charTypeArray.push(lowercase)
  numOfArrays++
  console.log("lowercase:")
  console.log(lowercase);
}
if (upper){
  for (i = 0; i < length; i++) {
    uppercase=uppercase+validUpper.charAt(randNum(0,25));
  }
  charTypeArray.push(uppercase)
  numOfArrays++
  console.log("uppercase:")
  console.log(uppercase);
}
if (numeric){
  for (i = 0; i < length; i++) {
    numbers=numbers+validNumber.charAt(randNum(0,9));
  }
  numOfArrays++
  charTypeArray.push(numbers)
  console.log("numbers:")
  console.log(numbers);
}
if (special){
  for (i = 0; i < length; i++) {
    specialChars=specialChars+validSpecial.charAt(randNum(0,32));
  }
  numOfArrays++
  charTypeArray.push(specialChars)
 
  //For the given password length, choose an array index at random (and therefor a character type at random)
  // and a character in that index also at random then add to the generated password variable
  for (i=0; i< length; i++) {
    generated=generated + charTypeArray[randArray(charTypeArray)].charAt(randNum(0,length-1))
  }

 //There is an edge case where if truly random, the generated password might not have
 //one of each character type. Iterate through the generated password and ensure that it
 //has one of each character type
for (i=0; i< length; i++) {
  if((lower) && (validLower.includes(generated.charAt(i)))) {
      console.log(i)
      console.log("Contains Lower")
      lowerTest=true;
    }
}
for (i=0; i< length; i++) {
    if((upper) && (validUpper.includes(generated.charAt(i)))) {
        console.log(i)
        console.log("Contains Upper")
        upperTest=true;
      }
    } 
  
  for (i=0; i< length; i++) {
    if((numeric) && (validNumber.includes(generated.charAt(i)))) {
        console.log(i)
        console.log("Contains Numeric")
        numericTest=true;
      }
    }
  
  for (i=0; i< length; i++) {
    if((special) && (validSpecial.includes(generated.charAt(i)))) {
        console.log(i)
        console.log("Contains Special")
        specialTest=true;
      }
    }
//We had to check all 4 character types, but all might not be needed. So insure that
//the booleans match between selected type and tested type. If all the booleans match,
//test is successful. If not, generate a new pass with the same criteria
  if (((lower === lowerTest) && (upper === upperTest) && (numeric == numericTest) && (special == specialTest))) {
    console.log("All tests pass!")
    return generated
  } else {
  generatePassword(length, lower, upper, numeric, special)
}
}	


//Get user inputs for password length and character type using prompts
//Sanitize inputs to uppercase
function getUserInput() {
  //Input prompts
  passwordInpt.len = prompt("Choose Password Length (8-128)");
  allowLower = prompt("Lower Case Allowed? (Y/N)");
  //update the correct boolean on Y
  if (allowLower.toUpperCase() == "Y") {
    passwordInpt.lower = true;
  }
  allowUpper = prompt("Upper Case Allowed? (Y/N)");
  if (allowUpper.toUpperCase() == "Y") {
    passwordInpt.upper = true;
  }
  allowNumeric = prompt("Numeric Case Allowed? (Y/N)");
  if (allowNumeric.toUpperCase() == "Y") {
    passwordInpt.numeric = true;
  }
  allowSpecial = prompt("Special Case Allowed? (Y/N)");
  if (allowSpecial.toUpperCase() == "Y") {
    passwordInpt.special = true;
  }
}
