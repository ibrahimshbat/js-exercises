// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}
function captialise(str) {
  var arrayedStr = str.split("");
  arrayedStr[0] = arrayedStr[0].toUpperCase();
  return arrayedStr.join("");
 // var firstChar = str.charAt(0);
 // var cap = firstChar.toUpperCase()
  //var splStr = str.split(firstChar);
  //splStr[0] = cap;
  //return splStr[0] + splStr[1];
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidy = mentors.map(tidyUpString);
var mentorsTidyAndCapitalised = mentorsTidy.map(captialise);

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
