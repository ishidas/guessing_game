//Javascript practice-prompt & alert//
var name = prompt('What is your name?');
alert('Great to meet you, ' + name +' !');

var countryOfOrigin = prompt('Where are you originally from?');
alert('Nice! I would love to go visit ' + countryOfOrigin +' ' + 'one day!');

//Guessing Game 10.27 Assignment//

var gamePlay = prompt('Do you want to play a game? (YES or NO)').toUpperCase();
  if (gamePlay === ('YES' && 'Y')) {
    alert('Great! That\'s the spirit! Let\'s play!');
  } else if (gamePlay === ('NO' && 'N')) {
    alert('Ok, but you\'re gonna play it anyways..');
  } else {
    alert('That\'s not an option, but you\'re gonna play it anyways..');
  }

var score = 0
var question1 = prompt('Did I grow up in the US? (YES or NO)').toUpperCase();
  if (question1 === ('YES' && 'Y')) {
    alert('No, I grew up in Japan.');
  } else if (question1 === ('NO' && 'N')) {
    alert('Yes, you\'re correct!');
    console.log(question1 + ' : the user selected a correct answer.');
    score += 1;
  } else {
    alert('That\'s not an option.');
  }

var question2 = prompt('Do I like ice cream sandwiches? (YES or NO)').toUpperCase();
  if (question2 === ('YES' && 'Y')) {
    alert('Yes, I love ice cream sandwiches!');
    console.log(question2 + ' : the user selected a correct answer.');
    score += 1;
  } else if (question2 === ('NO' && 'N')) {
    alert('No, you\'re incorrect.');
  } else {
    alert('That\'s not an option.');
  }

var question3 = prompt('Did I move from Hawaii? (YES or NO)').toUpperCase();
  if (question3 === ('YES' && 'Y')) {
    alert('Yes, I did move from Hawaii!');
    console.log(question3 + ' : the user selected a correct answer.');
    score += 1;
  } else if (question3 === ('NO' && 'N')) {
    alert('No, you\'re incorrect.');
  } else {
    alert('That\'s not an option.');
  }
//Assignment on 10/28 starts from here
//adding question 4 (extra)from 10/27-used while loope and if statements.
  var correctAnswer = 8
  while ( question4 !== correctAnswer ) {
    alert('That is not my favorite number. hint- between 5 and 9');
    console.log('the user typed:' + ' ' + 'number' + ' ' + question4);
    var question4 = parseInt(prompt('What is my favorite number?'));
  }
      if ( question4 === correctAnswer ){
        console.log('the user selected' + ' ' + question4 + ': that is correct.');
        alert('Yes, your answer is' + ' ' + question4 + ' ' + 'and that is correct!');
        score += 1
    }

//adding question 5
var question5 = prompt('Do you think I like sea otters? (YES or NO)').toUpperCase();
  if (question5 === ('YES' && 'Y')) {
    alert('Yes, I love sea otters, and I think they are cute.');
    console.log(question5 + ' : the user selected a correct answer.');
    score += 1;
  } else if (question5 === ('NO' && 'N')) {
    alert('No, you\'re incorrect.');
  } else {
    alert('That\'s not an option.');
  }





  alert('You got' + ' ' + score + ' correct answers out of 6 questions!' );


