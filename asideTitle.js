const title = document.querySelector('aside-title');
let position = 0;
let direction = 1;

function moveText() {
  position += direction;
  title.style.left = position + 'px';

  if (position >= 500 || position <= 0) {
    direction *= 0;
  }

  requestAnimationFrame(moveText);
}

moveText();
