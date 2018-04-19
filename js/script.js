$(document).ready(function() { //<--- document ready lets page load before applying jQuery



// carousel

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });








// subscribe email validation.
$(".email").on("submit", function(event) {
    event.preventDefault();
    if ($("#my-text-input").val() == "") {
    alert("You missed the field.");
    } else {
    alert("Thanks for filling the field!");
}
});



















}); // end of doc ready