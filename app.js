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
