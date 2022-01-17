const body = document.querySelector('body');
const toaster = document.querySelector('.toaster');
const closeToaster = document.querySelector('#closeToaster');

const showPopup = () => {
  toaster.classList.remove('collapsed');
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(showPopup, 15000);
});

body.addEventListener('mouseout', (evt) => {
  if (evt.target == body) {
    showPopup();
  }
});

closeToaster.addEventListener('click', () => {
  toaster.classList.add('collapsed');
});
