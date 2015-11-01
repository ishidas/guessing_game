var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');
var ttlscore = document.getElementById('finalScore');
var score = 0;

//Javascript practice-prompt & alert//

var name = prompt('What is your name?');
alert('Great to meet you, ' + name +' !');

var countryOfOrigin = prompt('Where are you originally from?');
alert('Nice! I would love to go visit ' + countryOfOrigin +' ' + 'one day!');

//Guessing Game 10.27 Assignment//


function intro() {
  var gamePlay = prompt('Do you want to play a game? (YES or NO)').toUpperCase();
  if (gamePlay === 'YES' || gamePlay === 'Y') {
    alert('Great! That\'s the spirit! Let\'s play!');
  } else if (gamePlay === 'NO' || gamePlay === 'N') {
    alert('Ok, but you\'re gonna play it anyways..');
  } else {
    alert('That\'s not an option, but you\'re gonna play it anyways..');
  }
}

function q1(){
  var question1 = prompt('Did I grow up in the US? (YES or NO)').toUpperCase();
  if (question1 === 'YES' || question1 === 'Y') {
    ans1.innerHTML = 'No, I grew up in Japan.';
    ans1.className = "red";
    // alert('No, I grew up in Japan.');
  } else if (question1 === 'NO' || question1 === 'N') {
    score += 1;
    console.log(score);
    ans1.innerHTML = 'Yes, you\'re correct! <br /> <img style= "width: 200px"; src="img/osakajpn.jpg" alt="Osaka, Japan">';
    ans1.className= "green";
    // alert('Yes, you\'re correct!');
    console.log(question1 + ' : the user selected a correct answer.');
  } else {
    ans1.innerHTML = 'That\'s not an option.';
    ans1.className= "red";
    //alert('That\'s not an option.');
  }
}

function q2(){
  var question2 = prompt('Do I like ice cream sandwiches? (YES or NO)').toUpperCase();
  if (question2 === 'YES' || question2 === 'Y') {
    score += 1;
    console.log(score);
    ans2.innerHTML = 'Yes, I love ice cream sandwiches! <br /> <img style="width: 200px"; src="img/icecream.jpg" alt="Ice cream">';
    ans2.className = "green";
    // alert('Yes, I love ice cream sandwiches!');
    console.log(question2 + ' : the user selected a correct answer.');
  } else if (question2 === 'NO' || question2 === 'N') {
    ans2.innerHTML = 'No, you\'re incorrect.';
    ans2.className = "red";
    // alert('No, you\'re incorrect.');
  } else {
    ans2.innerHTML = 'That\'s not an option.';
    ans2.className = "red";
    // alert('That\'s not an option.');
  }
}

function q3(){
  var question3 = prompt('Did I move from Hawaii? (YES or NO)').toUpperCase();
  if (question3 === 'YES' || question3 === 'Y') {
    score += 1;
    console.log(score);
    ans3.innerHTML = 'Yes, I did move from Hawaii! <br /> <img style= "width: 200px"; src="img/hawaii.jpg" alt="Hawaii">';
    ans3.className = "green";
    // alert('Yes, I did move from Hawaii!');
    console.log(question3 + ' : the user selected a correct answer.');
  } else if (question3 === 'NO' || question3 === 'N') {
    ans3.innerHTML = 'No, you\'re incorrect.';
    ans3.className = "red";
    // alert('No, you\'re incorrect.');
  } else {
    ans3.innerHTML = 'That\'s not an option.';
    ans3.className = "red";
    // alert('That\'s not an option.');
  }
}

//Assignment on 10/28 starts from here
//adding question 4 (extra)from 10/27-used while loope and if statements.
function q4() {
  var correctAnswer = 8;
  var askQuestion4 = 'What is my favorite number?';
  var userAnswer4 = parseInt(prompt(askQuestion4));
  while (userAnswer4 !== correctAnswer) {
    ans4.innerHTML = 'That is not my favorite number. hint- between 5 and 9'
    // alert('That is not my favorite number. hint- between 5 and 9');
    console.log('the user typed:' + ' ' + 'number' + ' ' + userAnswer4);
    userAnswer4 = parseInt(prompt(askQuestion4)) }
    // if(userAnswer4 === correctAnswer){
      console.log('the user selected a correct answer:' + ' ' + correctAnswer);
      ans4.innerHTML = 'Yes, that is correct! <br /> <img style= "width: 200px"; src="img/numbereight.jpg" alt="Number Eight">';
      ans4.className = "green";
      score += 1;
      console.log(score);
        // alert('Yes, that is correct!');
    // }
  // }
}

//adding question 5
function q5() {
  var question5 = prompt('Do you think I like sea otters? (YES or NO)').toUpperCase();
  if (question5 === 'YES' || question5 === 'Y') {
    ans5.innerHTML = 'Yes, I love sea otters, and I think they are cute. <br /> <img style="width: 200px"; src="img/seaotter.jpg" alt="Sea Otter">';
    score += 1;
    console.log(score);
    ans5.className = "green";
    // alert('Yes, I love sea otters, and I think they are cute.');
    console.log(question5 + ' : the user selected a correct answer.');
  } else if (question5 === 'NO' || question5 === 'N') {
    ans5.innerHTML = 'No, you\'re incorrect.';
    ans5.className = "red";
    // alert('No, you\'re incorrect.');
  } else {
    ans5.innerHTML = 'That\'s not an option.';
    ans5.className = "red";
    // alert('That\'s not an option.');
  }
}

//adding question 6
function q6() {
  var correctAnswer6 = 11;
  var askQuestion6 = 'How long did I live in Hawaii?';
  var userAnswer6 = parseInt(prompt(askQuestion6));
    while (userAnswer6 !== correctAnswer6) {
    ans6.innerHTML = 'That\'s incorrect. hint- more than a decay, less than 15.';
    // alert('That\'s incorrect. hint- more than a decay, less than 15.');
    console.log('the user typed:' + ' ' + 'number' + ' ' + userAnswer6);
    userAnswer6 = parseInt(prompt(askQuestion6)) }
      // if(userAnswer6 === correctAnswer6){
    console.log('the user selected a correct answer:' + ' ' + correctAnswer6);
    ans6.innerHTML = 'Yes, that is correct!<br /> <img style="width: 200px"; src="img/livedinhawaii11yrs.jpg" alt="Lived in hawaii">';
    score += 1;
    console.log(score);
    ans6.className = "green";
        // alert('Yes, that is correct!');
    // }
  // }
}


intro();
window.setTimeout(q1, 1000);
window.setTimeout(q2, 1050);
window.setTimeout(q3, 1100);
window.setTimeout(q4, 1150);
window.setTimeout(q5, 1200);
window.setTimeout(q6, 1250);
// q1();
// q2();
// q3();
// q4();
// q5();
// q6();
window.setTimeout(function (){ ttlscore.innerHTML = 'You got' + ' ' + score + ' correct answers out of 6 questions!' ;}, 1300);
window.setTimeout(function (){ console.log(score);}, 1350);
// alert('You got' + ' ' + score + ' correct answers out of 6 questions!' );
