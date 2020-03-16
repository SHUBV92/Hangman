var programming_languages = [
  "python",
  "Javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby"
];

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer =
    programming_languages[
      Math.floor(Math.random() * programming_languages.length)
    ];
}

function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      letter =>
        `
        <button 
            class="btn btn-lg btn-primary m-2"
            id='` +
        letter +
        `'
            onClick="handleGuess('` +
        letter +
        `')"
            >
                ` +
        letter +
        `
                </button>
        `
    )
    .join(``);

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  alert(answer);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
  } else if (answer.indexOf(chosenLetter) === -1){
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();

  }
}

function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon (){
    if(wordStatus === answer){
        documents.getElementById('keyboard').innerHTML = 'You Win';
    }
}

function checkIfGameLost (){
    if(mistakes === maxWrong){
        document.getElementById('wordSpotLight').innerHTML = "The answer was: " + answer;
        documents.getElementById('keyboard').innerHTML = 'You Win';
    }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordSpotLight").innerHTML = wordStatus;
}

function updateMistakes(){
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/1.jpg'

    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}


document.getElementById("maxWrong").innerHTML = maxWrong;


randomWord();
generateButtons();
guessedWord();
