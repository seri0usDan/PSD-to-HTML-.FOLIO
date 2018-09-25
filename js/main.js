$(document).ready(function(){

  /*----------------------------
				Preloader
  -----------------------------*/
  
  setTimeout(function() {	
		$('#preloader').fadeOut(); 
  }, 1000);

  /*----------------------------
				Smooth Scroll
  -----------------------------*/
  
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

  /*----------------------------
				Hamburger Toggle
  -----------------------------*/

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

  /*----------------------------
				Magnific Popup Init
  -----------------------------*/

  $('.work-piece').magnificPopup({
    delegate: 'a', 
    type: 'image'
  });

});