


const burger = document.querySelector('.burger');
const navigation =
  document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
  const isOpen =
    navigation.classList.toggle(
      'header__navigation--open'
    );

  burger.classList.toggle(
    'burger--open',
    isOpen
  );

document.body.classList.toggle('no-scroll', isOpen);
document.documentElement.classList.toggle('no-scroll', isOpen);

  burger.setAttribute(
    'aria-expanded',
    String(isOpen)
  );
});


const loadMoreBtn = document.querySelector('.menu__load-more');

const grid = document.querySelector('.menu__grid');

loadMoreBtn.addEventListener('click', () => {
  grid.classList.add('menu__grid--expanded');

  loadMoreBtn.classList.add(
    'menu__load-more--hidden'
  );
});