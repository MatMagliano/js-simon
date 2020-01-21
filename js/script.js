// alert('Hello!')

//------ VARIABLES --------
var numRandomArray = [];

//    CREATE 5 RANDOM NUMBERS

while (numRandomArray.length < 5) {
  var numRandom = getRandomNumber(1, 50);
  numRandomArray.push(numRandom)
}
console.log(numRandomArray);

//     USER NUMBERS
var userNumbers = numbPrompt();
console.log(userNumbers);















//------- FUNCTIONS -------------

//        GET RANDOM NUMBER
function getRandomNumber(numMin, numMax) {
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return result;
}

//       NUMBER PROMPT
function numbPrompt() {
  var numberEntered = parseInt(prompt('Inserisci un numero da 1 a 50 di quelli che ti ricordi di aver visto'));
  return numberEntered;

}
