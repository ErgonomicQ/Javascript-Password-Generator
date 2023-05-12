// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!","#","$", "%", "&" , "'", "(", ")" , "*", "+ ", "-", ".", "/", ":", ";" , "<" ,"=" ,">","?", "@","[", "]" , "^" , "_" , "`", "{" ,"|" ,"}", "~",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K",'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var Numbers= ['1','2','3','4','5','6','7','8','9','0'];

var specialUpper = specialCharacters.concat(upperCase)
var specialUpperLow = specialCharacters.concat(upperCase, lowerCase)
var allOptions = specialCharacters.concat(upperCase, lowerCase, Numbers)
var upperLower = upperCase.concat(lowerCase)

console.log(specialCharacters)
console.log(upperCase)
console.log(lowerCase)
console.log (Numbers)
console.log (allOptions)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
   var userNumber = prompt("how many characters is your password? Chose Between 8 and 128." , "0")
   var charLength =  parseInt(userNumber)
   console.log(charLength)


   var upCase = confirm("Would you like uppercase letters?");
   var lowCase = confirm("would you like lowercase letters?");
   var specialCase = confirm("would you like special characters?");
   var numberCase = confirm("Would you like Numbers as well?");

   console.log(upCase)
   console.log(lowCase)
   console.log(specialCase)
   console.log(numberCase) 

  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
