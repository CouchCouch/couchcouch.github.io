(function() {
  var el = document.getElementById('typed-text');
  if (!el) return;

  var text = 'hello, World!';
  var index = 0;
  var speed = 100;

  function type() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, 500);
})();
