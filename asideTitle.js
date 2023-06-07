const title = document.querySelector('aside-title');
let position = 0; // i initialized the value of the position
let direction = 1; // initialized the value of the direction, the text will move to the right

function moveText() { // created a function moveText
  position += direction; // i updated the position by incrementing it with the direction
  title.style.left = position + 'px'; // setting css property of the h3 title to the updated position value

  if (position >= 500 || position <= 0) { // if positions exceeds 500px treshhold, or goes below zero, then direction will be reversed
    direction *= 0; // this creates a back move efect
  }

  requestAnimationFrame(moveText); // this command continuously the moveText function
}

moveText();
