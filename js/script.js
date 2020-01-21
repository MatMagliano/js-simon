alert('Pronto? Memorizza questi numeri')

//------ VARIABLES --------
var numRandomArray = [];
var numFound = [];
var timing = setTimeout(goPropmt, 30000);

//    CREATE 5 RANDOM NUMBERS

while (numRandomArray.length < 5) {
  var numRandom = getRandomNumber(1, 50);
  var find = inArray(numRandomArray, numRandom);
  if (find == false) {
    numRandomArray.push(numRandom)
  }
}
console.log(numRandomArray);
alert(numRandomArray);

//     USER NUMBERS & CHEK
function goPropmt() {
  var k = 0;
  while (k < 5) {
    var userNumbers = numbPrompt();
    k++;
    console.log(userNumbers);
    if (inArray(numRandomArray, userNumbers) == true) {
      numFound.push(userNumbers);
    }
  }
  alert('Avete indovinato i seguenti numeri ' + numFound + ' per un totale di ' + numFound.length + '/5');
}














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

//       CHECK NUMBER

function inArray(array, element) {
  var i = 0;
  var result = false;
  while (i <= array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i ++;
  }
  return result;
}
