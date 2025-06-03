let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').onclick = function () {

  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Enter a number!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct!';
    document.querySelector('.number').textContent = randomNumber;
    document.body.style.backgroundColor = '#28a745';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > randomNumber ? '📉 Too High!' : '📈 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.again').onclick = function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
};
