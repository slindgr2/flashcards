"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.


var x = 0;
function post_question(){
  document.getElementById('questions').innerHTML=questions[x].question;
}
function correct(){
  document.getElementById('questions').innerHTML=questions[x].answer;}
var x = 0;
document.getElementById('questions').innerHTML=questions[x].question;
document.getElementById('button').addEventListener('click',correct)
