$(document).ready(function() {

	$("#header-slider").owlCarousel({
    singleItem: true,
    navigation: false,
    theme: "header-slider-theme",
    navigationText : ["",""],
    slideSpeed: 600,
  
  });


  $("#agents-slider").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination:true,
    theme: "agents-slider-theme",
    navigationText : ["",""],
    slideSpeed: 600,
    
  });


  $("#top-slider").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination:true,
    theme: "top-slider-theme",
    navigationText : ["",""],
    slideSpeed: 600,
    
  });


 
        });

