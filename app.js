function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // extract the hours, show as string, padStart to ensure there is two digits
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`; // clock shows hours, minutes and seconds
  
    document.getElementById('clock').textContent = time; // updating text content with the current time
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);

  function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
  
    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'long' });
    const dayOfMonth = now.getDate();
  
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
  
    const dateTimeString = `${time}<br>${dayOfMonth} ${month} ${year}`;
    clockElement.innerHTML = dateTimeString;
  }
  
  // Call updateClock() initially to display the clock immediately
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  

  
 