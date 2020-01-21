// alert('Hello!')

//------ VARIABLES --------
var numRandomArray = [];

//    CREATE 5 RANDOM NUMBERS

while (numRandomArray.length < 5) {
  var numRandom = getRandomNumber(1, 50);
  numRandomArray.push(numRandom)
}
console.log(numRandomArray);















//------- FUNCTIONS -------------

//        GET RANDOM NUMBER
function getRandomNumber(numMin, numMax) {
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  var result = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return result
}
