// Assignment Code


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {


//Empty Array for later use. Arrays could be used local, but I've chosen to leave them global. 
var resultsArray = [];
var userresultArray = [];

    //user is first prompted to select an amount of characters within a predetermined range. parseInt is used to turn the users string into a number
    //if the user input could be interpreted as a number. "9" would be interpreted as 9. "C" is not a number, and will not be parsed.

   var length = parseInt(prompt("how many characters is your password? Chose Between 8 and 128." , "0"));

    // Validator to determine if number length is within the allowed range. 
   if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid Password Length: Click generate again then choose a length between 8 and 128.");
    return generatePassword();
   }

//console.log to confirm number was captured through parseInt
   console.log(length)

//Confirm Booleans
   var upCase = confirm("Would you like uppercase letters?");
   var lowCase = confirm("would you like lowercase letters?");
   var specialCase = confirm("would you like special characters?");
   var numberCase = confirm("Would you like Numbers as well?");

   // console.log to verify
   console.log(upCase)
   console.log(lowCase)
   console.log(specialCase)
   console.log(numberCase) 


   // This confirms if at least ONE character type is selected, and if it is not, it returns the user to the beginning of the prompts.
   if (!upCase && !lowCase && !numberCase && !specialCase){
    alert( "At least one character type must be selected. Please choose a at least one character type.");
    return generatePassword();
   }


  //This defines the character array the function will pull from
var specialCharacters = ["!","#","$","%","&","'","(", ")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K",'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var Numbers= ['1','2','3','4','5','6','7','8','9','0'];



   //this adds character arrays based on the confirm prompt returning true or not. 
   //resultsArray variable slowly fills up with strings of characters.
  
   if (upCase) {
    resultsArray = resultsArray.concat(upperCase);
   }
   if (lowCase) {
    resultsArray = resultsArray.concat(lowerCase);
   }
   if (numberCase){
    resultsArray = resultsArray.concat(Numbers);
   }
   if(specialCase){
    resultsArray = resultsArray.concat(specialCharacters);
   }
   console.log(resultsArray);



// once the resultsArray has been concatnated, a for loop is used, pulling from the length var, and generates a password of the chosen length. 

   for (var i=0; i < length; i++) {
    userresultArray.push (resultsArray[Math.floor(Math.random() * resultsArray.length)])};
    return userresultArray.join("")
  
  }

//Bonus: an Alert has been added to the code to display the password for the user right away, which when closed will be filled into the textbox.
//Client can leave this on, or can ask to have it commented out at a later date. 
 alert("Your New Password is " + password + ". Don't lose it!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
