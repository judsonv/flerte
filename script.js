document.getElementById('sim').onclick = function() {
    window.location.href = 'https://www.youtube.com/watch?v=-VEUWrmVsQ4'; 
  };
  document.getElementById('nao').onmouseover = function() {
    var naoBtn = document.getElementById('nao');
    naoBtn.style.position = 'absolute';
    naoBtn.style.top = Math.random() * window.innerHeight + 'px';
    naoBtn.style.left = Math.random() * window.innerWidth + 'px';
  };
  