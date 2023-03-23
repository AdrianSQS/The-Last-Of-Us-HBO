const buttonsCarousel = document.querySelectorAll('.button ');
const images = document.querySelectorAll('.img');

buttonsCarousel.forEach((button, indice) => {
  button.addEventListener('click', () => {

     disableSelectedButton();

     selectCarouselButton(button);

     hideActiveImage();

     showBackgroundImage(indice);
  })
})

function showBackgroundImage(indice) {
  images[indice].classList.add('active');
}

function selectCarouselButton(button) {
  button.classList.add('selected');
}

function  hideActiveImage() {
  const imgActive = document.querySelector('.active');
  imgActive.classList.remove('active');
}

function  disableSelectedButton() {
  const buttonSelected = document.querySelector('.selected');
  buttonSelected.classList.remove('selected');
}
