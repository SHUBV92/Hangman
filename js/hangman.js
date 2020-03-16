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
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button 
            class="btn btn-lg btn-primary m-2"
            id='` + letter + `'
            onClick="handleGuess('` + letter + `')"
            >
                ` + letter + `
                </button>
        `).join(``);

        document.getElementById('keyboard').innerHTML = buttonsHTML;

    }


    function guessedWord(){
        wordStatus = answer.split('')
        .map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join("");

        document.getElementById('wordSpotLight').innerHTML = wordStatus;
    }



    document.getElementById('maxWrong').innerHTML = maxWrong;



randomWord();
generateButtons();
guessedWord();
