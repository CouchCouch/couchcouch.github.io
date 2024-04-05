var i = 0;
var speed = 100 // Time to passe in ms for typewriter animation

/**
 * Helper function for typeWriter
 * @param {string} word 
 * @param {string} id 
 */
function typeWriterHelper(word, id) {
  if (i < word.length) {
    document.getElementById(id).innerHTML += word.charAt(this.i);
    this.i++;
    setTimeout(typeWriterHelper(word, id), 100);
  }
}

/**
 * Function to animate text in a typewriter fashion
 * @param {string} word 
 * @param {string} id 
 */
function typeWriter(word, id) {
  this.i = 0;
  typeWriterHelper(word, id);
}

