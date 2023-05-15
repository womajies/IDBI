const menuBtn = document.querySelector('.menu');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', (evt) => {
  evt.currentTarget.classList.toggle('menu--active');
  header.classList.toggle('header--opened');
});
