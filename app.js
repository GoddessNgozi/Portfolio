const mobileNavButton = document.getElementById('hambuger-menu');
const navPopup = document.getElementById('mobilePopup');
const closeNavPopup = document.getElementById('close-mobile-nav');
const navMenuButton = document.getElementById('mobile-menu');

mobileNavButton.addEventListener('click', () => {
  navPopup.style.visibility = 'visible';
});

closeNavPopup.addEventListener('click', () => {
  navPopup.style.visibility = 'hidden';
});

navMenuButton.addEventListener('click', () => {
  navPopup.style.visibility = 'hidden';
});
