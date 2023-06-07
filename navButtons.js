const navButtons = document.querySelectorAll('.header nav a');
navButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = 'none';
      button.style.color = '#00FF00';
      button.style.width = '115px';
      button.style.heigth = '5px';
      button.style.border = '2px solid blue'
      button.style.borderRadius = '50px';
      button.font.size = "30px";
  });

  button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'transparent';
      button.style.color = 'White';
      button.style.border = 'none';
      
  });
});