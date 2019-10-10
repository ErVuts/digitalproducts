$(document).ready(function(){
	'use strict';

	let coverHeight = $('.cover').height();

	$(window).on('scroll', function(){
		if($(window).scrollTop() > coverHeight / 2) {
			$('header').removeClass('bg-transparent')
						.addClass('bg-navbar');
		}else{
			$('header').addClass('bg-transparent')
						.removeClass('bg-navbar');
		}
		
	});
	$(window).on('scroll', function(){
		if($(window).scrollTop() < coverHeight / 4) {
			$('.homescroll').addClass('d-none');
		}else{
			$('.homescroll').removeClass('d-none');
		}
	});

	$('.nav-link').click(function(){
		$('.navbar-collapse').removeClass('show')
		$('.navbar-toggler').addClass('collapsed');
	});

	
	$('.work-slider').slick({
  dots: true,
  arrow:true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="work-arrow arrow-prev"></button>',
  nextArrow: '<button type="button" class="work-arrow arrow-next"></button>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    }
  ]
});

	$('.profile-slider').slick({
	  dots: false,
	  arrows:true,
	  slidesToShow: 3,
	  slidesToScroll: 2,
	  prevArrow: '<button type="button" class="team-arrow team-prev"></button>',
	  nextArrow: '<button type="button" class="team-arrow team-next"></button>',
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    }
	  ]
});

});
	function initMap() {
    	let map;
     	map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -7.934540, lng: 112.636695},
            zoom: 14,
            disableDefaultUI: true,
	    });
	  	let marker = new google.maps.Marker({
    	position: {lat: -7.930406, lng: 112.637736},
    	map: map,
    	icon:'../img/pin.png'
		});
	}

	initMap();



