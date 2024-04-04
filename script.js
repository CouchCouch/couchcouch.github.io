var i = 0;
function typeWriter(word, id, speed) {
  i = 0;
  typeWriterHelper(word, id, speed);
}

function typeWriterHelper(word, id, speed) {
  if (i < word.length) {
    document.getElementById(id).innerHTML += word.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}