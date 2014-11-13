"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.


var x = 0;
function post_question() {
  document.getElementById('questions') .innerHTML = questions[x].question;
  document.getElementById('button1') .removeEventListener('click', correct);
  document.getElementById('button1') .removeEventListener('click', incorrect);
  document.getElementById('button2') .removeEventListener('click', correct);
  document.getElementById('button2') .removeEventListener('click', incorrect);
  document.getElementById('button3') .removeEventListener('click', correct);
  document.getElementById('button3') .removeEventListener('click', incorrect);
  document.getElementById('button1') .addEventListener('click', correct);
  document.getElementById('button2') .addEventListener('click', incorrect);
  document.getElementById('button3') .addEventListener('click', incorrect); 
  document.getElementById('button1') .innerHTML = questions[x].options[0];
  document.getElementById('button2') .innerHTML = questions[x].options[1];
  document.getElementById('button3') .innerHTML = questions[x].options[2];
  document.getElementById('button1') .disabled = false;
  document.getElementById('button2') .disabled = false;
  document.getElementById('button3') .disabled = false;
  x = x + 1;
}
function correct() {
  document.getElementById('questions') .innerHTML = 'correct';
  document.getElementById('button1') .disabled = true;
  document.getElementById('button2') .disabled = true;
  document.getElementById('button3') .disabled = true;
  wait();
}
function incorrect() {
  document.getElementById('questions') .innerHTML = 'incorrect';
  document.getElementById('button1') .disabled = true;
  document.getElementById('button2') .disabled = true;
  document.getElementById('button3') .disabled = true;
  wait();
}
function wait() {
  window.setTimeout(post_question, 3000);
}
post_question();

