document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('main-nav');
  
    // Change background color on scroll
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.style.backgroundColor = '#555';
      } else {
        nav.style.backgroundColor = '#333';
      }
    });
  });
  