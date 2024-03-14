// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = parseInt(
    prompt("What length would you like the password?")
  );
  if (!passwordLength) {
    alert("Please enter the password length");
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
    var UpperCaseboolean = confirm("Do you want Uppercase characters?");
    var LowerCaseboolean = confirm("Do you want Lowercase characters?");
    var Numericalboolean = confirm("Do you want numbers?");
    var SpecialCaseboolean = confirm("Do you want special characters?");
    console.log(passwordLength);
    console.log(UpperCaseboolean);
    console.log(LowerCaseboolean);
    console.log(Numericalboolean);
    console.log(SpecialCaseboolean);
  } else {
    alert("Please enter password between 8-128 characters");
  }
  if (
    UpperCaseboolean === false &&
    LowerCaseboolean === false &&
    Numericalboolean === false &&
    SpecialCaseboolean === false
  ) {
    alert("Please choose at least one option");
  }
  let allPasswordOptions = {
    passwordlength: passwordLength,
    upperCaseboolean: UpperCaseboolean,
    lowerCaseboolean: LowerCaseboolean,
    numericalboolean: Numericalboolean,
    specialCaseboolean: SpecialCaseboolean,
  };
  return allPasswordOptions;
}

// Function for getting a random element from an array
function getRandom(allowedCharacters, passwordlength) {
  let password = "";

  for (let i = 0; i < passwordlength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters[randomIndex];
  }
  console.log(password);
  return password;
}

// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions();
  let allowedCharacters = "";
  let password = "";

  allowedCharacters += passwordOptions.lowerCaseboolean
    ? lowerCasedCharacters
    : "";
  allowedCharacters += passwordOptions.upperCaseboolean
    ? upperCasedCharacters
    : "";
  allowedCharacters += passwordOptions.numericalboolean
    ? numericCharacters
    : "";
  allowedCharacters += passwordOptions.specialCaseboolean
    ? specialCharacters
    : "";

  console.log(allowedCharacters);
  console.log(passwordOptions);
  let randomcharacters = getRandom(
    allowedCharacters,
    passwordOptions.passwordlength
  );
  return randomcharacters;
}

//const password = generatePassword(getPasswordOptions);

console.log(password);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // console.log("Testing button click")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
