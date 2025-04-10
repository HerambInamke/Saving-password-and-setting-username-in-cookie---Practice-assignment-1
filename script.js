document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the current count from the cookie or initialize it
  let count = getCookie('pageCount');
  
  // If cookie doesn't exist, initialize it to 0
  // If it exists, increment it by 1
  if (count === null) {
    count = 0;
  } else {
    count = parseInt(count) + 1;
  }

  // Update the cookie with the new count
  // Set it to expire in 7 days
  setCookie('pageCount', count, 7);

  // Display the count on the webpage
  const countDisplay = document.getElementById('countDisplay');
  if (countDisplay) {
    countDisplay.textContent = count;
  }
});