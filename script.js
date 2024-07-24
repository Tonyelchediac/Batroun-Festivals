document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navlist = document.querySelector('.navlist');

  menuToggle.addEventListener('click', function() {
    navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
    menuToggle.classList.toggle('change');
  });

  // Change background color on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navlist.classList.add('scrolled');
    } else {
      navlist.classList.remove('scrolled');
    }
  });
});
