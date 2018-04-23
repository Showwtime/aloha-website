$(document).ready(function() { //<--- document ready lets page load before applying jQuery


// Smooth Scrolling ========================================================
// Source - https://css-tricks.com/snippets/jquery/smooth-scrolling/#article-header-id-1
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// Carousel =============================================================
// Source https://flickity.metafizzy.co/

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

// subscribe email validation ===========================================

$(".button").on("click", function() {
    // Code to run when button clicked...
    var emailInput = $(".email").val();

    if ($(".email").val() === "") {
      alert("Please Check Email Address");
    } else {
      alert("Thank you for subscribing: " + emailInput );
    }
});



















}); // end of doc ready