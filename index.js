const track = document.querySelector('.favorites__track');

const prevButton = document.querySelector('.favorites__arrow--prev');
const nextButton = document.querySelector('.favorites__arrow--next');

const slides = document.querySelectorAll('.favorites__slide');
const indicators = document.querySelectorAll('.favorites__indicator');

let currentIndex = 0;

function updateSlider() {
  track.style.transform =
    `translateX(-${currentIndex * 100}%)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle(
      'favorites__indicator--active',
      index === currentIndex
    );
  });
}

nextButton.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  console.log(currentIndex);

  updateSlider();
});

prevButton.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

 console.log(currentIndex)

  updateSlider();
});