const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onCkickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCkickStartBtn() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled');
}

function onClickStopBtn() {
  clearInterval(timerId);
  stopBtn.setAttribute('disabled', 'disabled');
  startBtn.removeAttribute('disabled');
}
