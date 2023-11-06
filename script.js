const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');

leftSide.addEventListener('mouseenter', () => {
  leftSide.classList.add('change-width');
});
leftSide.addEventListener('mouseleave', () => {
  leftSide.classList.remove('change-width');
});

rightSide.addEventListener('mouseenter', () => {
  rightSide.classList.add('change-width');
});
rightSide.addEventListener('mouseleave', () => {
  rightSide.classList.remove('change-width');
});
