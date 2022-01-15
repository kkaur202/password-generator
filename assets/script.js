// Assignment code here



//functions 




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoice;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var number = [1, 2, 3,4,5,6,7,8,9,0];
var specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function

function generatePassword(){

  passwordLength = prompt("How much lenght of the password you prefer?");
  console.log("password lenght  " + passwordLength);

  //loop

  if (passwordLength < 8 || passwordLength > 128){
    passwordLength = window.alert("Password cannot be less than 8 letter and cannot be more than 128 letters");
    console.log("Password lenght " + passwordLength);
  }

  else if (!passwordLength){
    alert("Please put the value");
  }

  else{
    confirmLower = window.confirm("would you include  a lowercase letter?");
    confirmUpper = window.confirm("would you include  a Uppercase letter?");
    confirmNumber = window.confirm("would you include  a Number?");
    confirmSpecial = window.confirm("would you include  a special character?");

  };

  // if the cancel is chosen.

  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial){
    userChoice = window.alert("Choosing each criteria is must");
  }

  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial){
    userChoice = lowerCase.concat(upperCase,number);
    console.log(userChoice);
  }

  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoice = lowerCase.concat(upperCase, number);
    console.log(userChoice);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoice = lowerCase.concat(upperCase, specials);
    console.log(userChoice);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoice = lowerCase.concat(number, specials);
    console.log(userChoice);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoice = upperCase.concat(number, specials);
    console.log(userChoice);
  }

  else if (confirmLower){
    userChoice = lowerCase;
    console.log(userChoice);
  }

  else if (confirmUpper){
    userChoice = upperCase;
    console.log(userChoice);
  }
  else if (confirmNumber) {
    userChoice = number;
    console.log(userChoice);
  }
  else if (confirmSpecial) {
    userChoice = specials;
    console.log(userChoice);
  };

  var passwordBlank = [];

  for (var i =0; i< passwordLength; i++){
    var allChoices = userChoice[Math.floor(Math.random()* userChoice.length)];
    passwordBlank.push(allChoices)
    console.log(allChoices);
  }

  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;


}
