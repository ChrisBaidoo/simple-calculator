function calc(){
  var val1 = parseInt(document.querySelector("#value1").value); //get the value from 1st Value. change to number
  var val2  = parseInt(document.querySelector("#value2").value); //get the value from 2nd Value. change to number
  var operator = document.querySelector("#operator").value; //get the value from the operator
  var calculate;

  if (operator == 'add') { // Check if the operator = 'add' then do an addition
    calculate = val1 + val2 ;
  } else if (operator == 'sub') { // Check if the operator = 'sub' then doval1subtraction
    calculate = val1 - val2 ;
  } else if (operator == 'div') { // Check if the operator = 'div' then doval1division
    calculate = val1 / val2 ;
  }else if (operator == 'mul') { // Check if the operator = 'mul' then doval1multiplication
    calculate = val1 * val2 ;
  }

  // document.getElementById("btn").addEventListener("click", calc, false);


  document.querySelector("#result").innerHTML = calculate;

}
