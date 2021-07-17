let min = 1,
    max = 10,
    winningNum,
    guessesLeft = 3;

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

winningNum = Math.floor(Math.random() * (10 - 1)  +  1) +1;

guessBtn.addEventListener('mousedown' , function(e){
  let guess = parseInt(guessInput.value);
  if(guess == winningNum) {
    message.textContent = `${winningNum} is correct Congratulations`; 
    message.style.color = 'green';
    guessInput.style.borderColor = 'green';
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
    guessBtn.addEventListener('mousedown' , function(e){
      if(e.target.className === 'play-again'){
        window.location.reload();
      }
    })
    }
  else if (guess <= 0 || guess > 10 || isNaN(guess) ){
    message.textContent = `The Number Should be between ${min} and ${max}`;
    message.style.color = 'red';
  }
  else{
  guessesLeft -= 1 ; 
  if(guessesLeft == 0 ){
    message.textContent = `game over you lost ,  the winning num ${winningNum}`;
    guessInput.disabled = true;
    guessInput.style.borderColor = 'red';
    message.style.color = 'red';
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
    guessBtn.addEventListener('mousedown' , function(e){
      if(e.target.className === 'play-again'){
        window.location.reload();
      }
    })
  }else{
   message.textContent = `${guess} is not correct , ${guessesLeft} guess left`;
   guessInput.style.borderColor = 'red';
   guessInput.value = "";
   message.style.color = 'red';
     
  }
   }

});