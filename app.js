const toaster = document.querySelector('.toaster');
const close = document.querySelector('.close');

let mousePosY;

function displayPopUp() {
  toaster.classList.remove('collapsed');
}

window.addEventListener('mousemove', (event) => {
  mousePosY = event.clientY;

  if (mousePosY < 15) {
    displayPopUp();
  }
});

close.addEventListener('click', () => {
  toaster.classList.add('collapsed');
});

window.addEventListener('load', () => {
  setTimeout(displayPopUp, 5000);
});
