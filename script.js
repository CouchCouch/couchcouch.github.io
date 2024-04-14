var i = 0;
var speed = 100 // Time to passe in ms for typewriter animation

/**
 * Helper function for typeWriter
 * @param {string} word 
 * @param {string} id 
 */
function typeWriterHelper(word, id) {
  if (i < word.length) {
    document.getElementById(id).innerHTML += word.charAt(i);
    i++;
    setTimeout(typeWriterHelper, speed, word, id);
  }
}

/**
 * Function to animate text in a typewriter fashion
 * @param {string} word 
 * @param {string} id 
 */
function typeWriter(word, id) {
  i = 0;
  setTimeout(typeWriterHelper, 1000, word, id);
}

/**
 * Function to toggle dark mode
 */
function toggleDarkMode() {
  if (getCookie("mode") === "dark") {
    document.body.classList.remove("dark-mode");
    document.getElementById("light_mode_buttons").style.display = "block";
    document.getElementById("dark_mode_buttons").style.display = "none";
    setCookie("mode", "", -1); // remove the cookie
  } else {
    document.body.classList.add("dark-mode");
    document.getElementById("light_mode_buttons").style.display = "none";
    document.getElementById("dark_mode_buttons").style.display = "block";
    setCookie("mode", "dark", 365); // set the cookie to expire in 365 days
  }
}

// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

window.onload = function() {
  if (getCookie("mode") === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("light_mode_buttons").style.display = "none";
    document.getElementById("dark_mode_buttons").style.display = "block";
    setCookie("mode", "dark", 365); // set the cookie to expire in 365 days
  } else {
    document.getElementById("light_mode_buttons").style.display = "block";
    document.getElementById("dark_mode_buttons").style.display = "none";
    setCookie("mode", "", -1); // remove the cookie
  }
}
