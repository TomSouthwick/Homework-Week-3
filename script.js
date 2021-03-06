// Assignment Code
var includeNumbersElement = document.getElementById("includeNumbers");
var includeSymbolsElement = document.getElementById("includeSymbols");
var includeUppercaseElement = document.getElementById("includeUppercase");
var characterAmountRange = document.getElementById("characterAmountRange");
var characterAmountNumber = document.getElementById("characterAmountNumber");
var btnObject = document.getElementById("generate")
var password = document.getElementById("password")

var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)
).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);


// Event listener when button gets clicked
btnObject.addEventListener("click", e => {
  e.preventDefault()
  // Fetch all the checkboxes details that user ticked
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeSymbols = includeSymbolsElement.checked
  var includeNumbers = includeNumbersElement.checked
  var passwordSecure = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)

  // show the secure password in the e text area
  password.innerHTML = passwordSecure
})

// Function to generate a secure password
function generatePassword(characterAmount, includeUppercase,includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  var passwordCharacters  = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  //alert(passwordCharacters);
return passwordCharacters.join("")
}

function arrayFromLowToHigh(low , high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}
