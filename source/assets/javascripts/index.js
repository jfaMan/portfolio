import 'bootstrap';

const banner = document.querySelector('.banner__background');
const bannerTextName = document.querySelector('.banner__text--name');
const bannerTextHr = document.querySelector('.banner__text--hr');
const bannerTextJobTitle = document.querySelector('.banner__text--job-title');
const loadingIcon = document.querySelector('.banner__loading-icon-wrapper');
const imageUrl = 'assets/images/banner.jpg';
let preloaderImage = document.createElement('img');

preloaderImage.src = imageUrl;

const calculateDelay = (position) => {
  const baseDelay = 1200;
  return position ? baseDelay - 700 + (position === 1 ? 0 : (500 * (position - 1))) : baseDelay;
};

preloaderImage.addEventListener('load', () => {
  banner.style.backgroundImage = `url(${imageUrl})`;
  loadingIcon.classList.add('hide');

  setTimeout(() => {
    banner.classList.remove('hide');

    setTimeout(() => {
      bannerTextName.classList.remove('hide');
    }, calculateDelay(1));

    setTimeout(() => {
      bannerTextJobTitle.classList.remove('hide');
    }, calculateDelay(2));

    setTimeout(() => {
      bannerTextHr.classList.remove('hide');
    }, calculateDelay(3));
  }, calculateDelay(0));

  preloaderImage = null;
});
