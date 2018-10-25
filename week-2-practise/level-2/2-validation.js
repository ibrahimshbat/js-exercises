// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function isNumber(value) {
  return typeof value === "number";
}

function isPositive(value){
  if (value >=0){
    return true;
  } else{
    return false;
  }
}

function isGraterThanOrEQ100(value){
  if (value <=100){
    return true;
  } else{
    return false;
  }
}


function validate(num) {
  if (isNumber(num) && isPositive(num) && isGraterThanOrEQ100(num)){
    return true;
  } else{
    return false;
  }
  return typeof num === "number" && num > 0 && num <= 100;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(validate(10));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-12));
console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  true
  true
  false
  false
  false
*/
