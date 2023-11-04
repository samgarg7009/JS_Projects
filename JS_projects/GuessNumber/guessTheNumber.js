let radm = parseInt(Math.random()*100 +1);
 
const submit = document.querySelector('#sbmt')
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector(".lastresult");
const loworhi = document.querySelector(".loworhi");
const startover = document.querySelector(".result");

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playgame = true
if(playgame){
   submit.addEventListener('click',function(e){
      e.preventDefault()
      const guess = parseInt(userInput.value);
      validate(guess)
   })
}

//check value is Nan or not
function validate(guess){
   if(isNaN(guess) || guess>100 || guess<1){
      alert('Please enter a valid number')
      userInput.value = "";
   }else {
      prevGuess.push(guess)
      if(numGuess>10){
         displayguess(guess)
         message(`Game Over. Random Number was ${radm}`)
         endgame()
      } else {
         displayguess(guess)
         check(guess)
      }
   }
}

//check guess == random no. or high or low
function check(guess){
   if (guess === radm) {
     message("you guessed it right");
     endgame();
   } else if (guess < radm) {
     message("no. is too low");
   } else if (guess > radm) {
     message("no. is too high");
   }
}

//upadate prev and remaining guesses
function displayguess(guess){
   userInput.value = ''
   guessSlot.innerHTML+= `${guess}, `
   numGuess++;
   remaining.innerHTML = `${11-numGuess}`
}

function message(message){
   loworhi.innerHTML = `<h1>${message}</h1>`
}

function endgame(){
   userInput.value = ''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
   startover.appendChild(p)
   playgame = false
   newGame()
}

function newGame(){
   const newgame = document.querySelector('#newGame')
   
   newgame.addEventListener('click',function(e) {
      //console.log("clicked");
      radm = parseInt(Math.random() * 100 + 1)
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = ''
      remaining.innerHTML = `${11-numGuess}`
      userInput.removeAttribute('disabled')
      startover.removeChild(p)
      playgame = true;
   });
}

