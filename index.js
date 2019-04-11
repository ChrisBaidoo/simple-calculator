function calc(){
  var calculate;
  var value1 = document.querySelector("#value1");
  var value2 = document.querySelector("#value2");

  var val1 = parseFloat(value1.value); //get the value from 1st Value. change to number
  var val2  = parseFloat(value2.value); //get the value from 2nd Value. change to number
  var operator = document.querySelector("#operator").value; //get the value from the operator
  var result = document.querySelector("#result");
  var val1IsInvalid = !Number.isInteger(val1);
  var val2IsInvalid = !Number.isInteger(val2);

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

  /*** Set Result ***/
  result.innerHTML = calculate;

}
