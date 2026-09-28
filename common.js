
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');

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



const themeSwitch = document.querySelector('.theme-switch')

const root =
  document.documentElement;

const savedTheme =
  localStorage.getItem('theme');

const currentTheme =
  savedTheme || 'light';

setTheme(currentTheme);

themeSwitch.addEventListener('click', () => {

  const currentTheme =
    root.dataset.theme;

  const nextTheme =
    currentTheme === 'light'
      ? 'dark'
      : 'light';

  setTheme(nextTheme);
});

function setTheme(theme) {
  root.dataset.theme = theme;

  localStorage.setItem(
    'theme',
    theme
  );

  const isDark =
    theme === 'dark';

  themeSwitch.setAttribute(
    'aria-checked',
    String(isDark)
  );

  themeSwitch.setAttribute(
    'aria-label',
    isDark
      ? 'Switch to the light theme'
      : 'Switch to the dark theme'
  );
}