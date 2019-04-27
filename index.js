function calc(){
  var calculate;
  var value1 = document.querySelector("#value1");
  var value2 = document.querySelector("#value2");

  var val1 = parseFloat(value1.value); //get the value from 1st Value. change to number
  var val2  = parseFloat(value2.value); //get the value from 2nd Value. change to number
  var operator = document.querySelector("#operator").value; //get the value from the operator
  var result = document.querySelector("#result");
  var val1IsInvalid = !Number.isInteger(val1); //check that val1 is not an interger
  var val2IsInvalid = !Number.isInteger(val2); //check that val2 is not an interger

  /*** Clear Form ***/
  value1.classList.remove("invalid");
  value2.classList.remove("invalid");
  result.innerHTML = "";

  /*** Validate Form ***/
  if (val1IsInvalid || val2IsInvalid) {
    if (val1IsInvalid){
      value1.classList.add("invalid");
    }
    if (val2IsInvalid){
      value2.classList.add("invalid");
    }
    return;
  };

  // if (operator == 'add') { // Check if the operator = 'add' then do an addition
  //   calculate = val1 + val2 ;
  // } else if (operator == 'sub') { // Check if the operator = 'sub' then doval1subtraction
  //   calculate = val1 - val2 ;
  // } else if (operator == 'div') { // Check if the operator = 'div' then doval1division
  //   calculate = val1 / val2 ;
  // } else if (operator == 'mul') { // Check if the operator = 'mul' then doval1multiplication
  //   calculate = val1 * val2 ;
  // }

  /*** Calculate Result ***/
  switch (operator) {
    case 'add':
      calculate = val1 + val2 ;
      break;
    case 'sub':
      calculate = val1 - val2 ;
      break;
    case 'div':
      calculate = val1 / val2 ;
      break;
    case 'mul':
      calculate = val1 * val2 ;
      break;
  }

  /*** Validate Form ***/

  result.innerHTML = calculate;
}

function calculate(){
  let equation = document.querySelector("#input").value;
  let equationArray = equation.split("");
  //Refactor using Array.reduce() method
  equationArray = equationArray.map(item => {
    const integer = parseFloat(item);
    if (isNaN(integer)){
      return item;
    } else {
      return integer;
    }
  });
}

function clearScreen() {
  document.querySelector("#input").value = "";
  document.querySelector("#answer").value = "";
}


function getNumber({value}) {
  let currentNumber = document.querySelector("#input").value;
  let lastCharacter = currentNumber.charAt(currentNumber.length - 1)
  let operators = ["*", "/", "+", "-"];

  if (operators.includes(value) && operators.includes(lastCharacter)) {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }

  document.querySelector("#input").value = `${currentNumber}${value}`;
}

let operator;
function getOper({value}) {
  operator = value;
}
