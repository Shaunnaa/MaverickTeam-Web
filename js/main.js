/*navbar and scrolling*/
document.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const header = document.querySelector('header');
    if (scroll > 0) {
        header.classList.add('scrolling');
    } else { 
        header.classList.remove('scrolling');
    }
});
/*End-navbar and scrolling*/

/*-- navbar-toggler --*/
/*Fix when open navbar-toggler background not cover all link js*/
$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('#myHeader').toggleClass('open');
  });
});
/*-- End navbar-toggler --*/

