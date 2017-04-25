
$(document).ready(function(){
  $('.carousel').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  draggable: false,
  pauseOnFocus:false,
  pauseOnHover:false
  });

//hide nav at scroll
var userScrollStart = 0;


$( window ).scroll(function() {

  var userScrollDistance = $(this).scrollTop();

  if (userScrollDistance - userScrollStart > 50) {
   var navHeight = $('.navbar').css('height'); //height of navbar??
   $('.navbar').animate({top: '-' + navHeight}, 150);

   userScrollStart = userScrollDistance ;

  } else if (userScrollStart - userScrollDistance > 50) {
    $('.navbar').animate({top: 0}, 150);
  }

});





});
