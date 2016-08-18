//single line comment =/
'use strict';

var user = prompt('what is your name?');
console.log('user name: ', user);

alert('Hi there, ' + user + ' I\'m going to ask you a series of Y/N questions. To get started hit ok.');
//single line comment =/
var answer1 = prompt('Are you familiar with CSS? Answer Y/N?');
console.log('css: ', answer1);

if ((answer1.toLowerCase() === 'yes') || (answer1.toUpperCase() === 'YES') || (answer1.toLowerCase() === 'y') || (answer1.toUpperCase() === 'Y')) {
  alert('Cool.');
  console.log('cool');
}
else if(answer1.toLowerCase() === 'no' || (answer1.toUpperCase() === 'NO') || (answer1.toLowerCase() === 'n') || (answer1.toUpperCase() === 'N')) {
  alert('That\'s too bad');
  console.log('That\'s too bad');
}
//single line comment =/
var answer2 = prompt('Are you familiar with HTML? Answer Y/N?');
console.log('HTML: ', answer2);

if ((answer2.toLowerCase() === 'yes') || (answer2.toUpperCase() === 'YES') || (answer2.toLowerCase() === 'y') || (answer2.toUpperCase() === 'Y')) {
  alert('Cool.');
  console.log('cool');
}
else if(answer2.toLowerCase() === 'no' || (answer2.toUpperCase() === 'NO') || (answer2.toLowerCase() === 'n') || (answer2.toUpperCase() === 'N')) {
  alert('That\'s too bad');
  console.log('That\'s too bad');
}
//single line comment =/
var answer3 = prompt('Are you familiar with JavaScript? Answer Y/N?');
console.log('JS: ', answer3);

if ((answer3.toLowerCase() === 'yes') || (answer3.toUpperCase() === 'YES') || (answer3.toLowerCase() === 'y') || (answer3.toUpperCase() === 'Y')) {
  alert('Cool.');
  console.log('cool');
}
else if(answer3.toLowerCase() === 'no' || (answer3.toUpperCase() === 'NO') || (answer3.toLowerCase() === 'n') || (answer3.toUpperCase() === 'N')) {
  alert('That\'s too bad');
  console.log('That\'s too bad');
}
//single line comment =/
var answer4 = prompt('Do you plan to be a developer? Answer Y/N?');
console.log('developer: ', answer4);

if ((answer4.toLowerCase() === 'yes') || (answer4.toUpperCase() === 'YES') || (answer4.toLowerCase() === 'y') || (answer4.toUpperCase() === 'Y')) {
  alert('Cool.');
  console.log('cool');
}
else if(answer4.toLowerCase() === 'no' || (answer4.toUpperCase() === 'NO') || (answer4.toLowerCase() === 'n') || (answer4.toUpperCase() === 'N')) {
  alert('That\'s too bad');
  console.log('That\'s too bad');
}
//single line comment =/
var answer5 = prompt('Did you enjoy the survey? Answer Y/N?');
console.log('Enjoy Survey: ', answer5);

if ((answer5.toLowerCase() === 'yes') || (answer5.toUpperCase() === 'YES') || (answer5.toLowerCase() === 'y') || (answer5.toUpperCase() === 'Y')) {
  alert('Cool.');
  console.log('cool');
}
else if(answer5.toLowerCase() === 'no' || (answer5.toUpperCase() === 'NO') || (answer5.toLowerCase() === 'n') || (answer5.toUpperCase() === 'N')) {
  alert('That\'s too bad');
  console.log('That\'s too bad');
}
//single line comment (Question 6 - favorite number) =/
var number;
var counter = 0;

while (number !== 7) {
  number = parseInt(prompt('What is my favorite number?'));
  if (counter === 4) {
    break;
  }
  if (number < 7) {
    alert('guessed too low');
    counter++;
  } else if (number > 7) {
    alert('guessed too high');
    counter++;
  } else if (number === NaN || number === null) {
    alert('enter a number please');
    counter++;
  }
}
console.log('counter:', counter);
//single line comment (Question 7 - Name a country I have lived in before) =/
counter = 0;
var country = ['Bahamas', 'Pakistan', 'Kenya', 'UAE'];
var flag;

while (counter !== 6) {
  var answer7 = prompt('Name a country I have lived in before moving to the states? Hint: I have lived in 3 continents.');
  console.log('current country guessed: ', answer7);
  for (var i = 0; i < country.length; i++) {
    if (answer7 === country[i]) {
      alert('Woohoo! You guessed a country right!!!');
      flag = true;
      break;
    }
  }
  counter++;
  console.log(counter);
}

if (!flag) {
  alert('Wrong... nice try! This is not an easy guess. I actually lived in, ' + country);
}
