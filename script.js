window.addEventListener('scroll', function () {

    let navbar = document.querySelector('nav')
  if (window.scrollY == 0) {
      navbar.classList.remove('sticky');

  } else {
    navbar.classList.add('sticky');
  }
  })

