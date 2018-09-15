$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

  $(".hamburger, .anchor").click(function () {
    if ($(".main-nav .links").css("transform").toLowerCase() == "none" && $(window).width() < 750 ) {
      $(".main-nav .links").css("transform", "translateX(100%)");
      $(".hamburger").removeClass(" is-active");
      $("body").css("overflow", "inherit");
    } else if ($(window).width() < 750){
    $(".main-nav .links").css("transform", "none");
    $(".hamburger").addClass(" is-active");
    $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "inherit");
    }
  });

  $('.work-piece').magnificPopup({
    delegate: 'a', 
    type: 'image'
  });

});