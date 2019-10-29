/* Preloader */
jQuery(window).load(function () {

  $("#preloader").fadeOut("slow");

});

/* Slider */
$(function () {

  var Page = (function () {
    var $navArrows = $('#nav-arrows'),
        $nav = $('#nav-dots > span'),
        slitslider = $('#slider').slitslider({
          onBeforeChange: function (slide, pos) {

            $nav.removeClass('nav-dot-current');
            $nav.eq(pos).addClass('nav-dot-current');
          }
        }),

        init = function () {
          initEvents();
        },
        initEvents = function () {
          $navArrows.children(':last').on('click', function () {
            slitslider.next();
            return false;
          });

          $navArrows.children(':first').on('click', function () {
            slitslider.previous();
            return false;

          });

          $nav.each(function (i) {
            $(this).on('click', function (event) {
              var $dot = $(this);
              if (!slitslider.isActive()) {
                $nav.removeClass('nav-dot-current');
                $dot.addClass('nav-dot-current');
              }

              slitslider.jump(i + 1);
              return false;
            });
          });
        };
    return {init: init};
  })();

  Page.init();

});


$(document).ready(function () {

  /* Nav */
  jQuery('#nav').singlePageNav({
    offset: jQuery('#nav').outerHeight(),
    filter: ':not(.external)',
    speed: 2000,
    currentClass: 'current',
    easing: 'easeInOutExpo',
    updateHash: true,
    beforeStart: function () {
      // console.log('begin scrolling');
    },
    onComplete: function () {
      // console.log('done scrolling');
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".navbar-brand a").css("color", "#fff");
      $("#navigation").removeClass("animated-header");
    } else {
      // $(".navbar-brand a").css("color", "inherit");
      $(".navbar-brand a").css("color", "#fff");
      $("#navigation").addClass("animated-header");
    }
  });

  // Slider Height
  var slideHeight = $(window).height();

  $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height', slideHeight);

  $(window).resize(function () {
    'use strict';
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height', slideHeight);
  });

  $("#works, #testimonial").owlCarousel({
    navigation: true,
    pagination: false,
    slideSpeed: 700,
    paginationSpeed: 400,
    singleItem: true,
    navigationText: ["<i class='fa fa-angle-left fa-lg'></i>", "<i class='fa fa-angle-right fa-lg'></i>"]
  });


  /* Featured Project Lightbox */
  $(".fancybox").fancybox({
    padding: 0,

    openEffect: 'elastic',
    openSpeed: 650,

    closeEffect: 'elastic',
    closeSpeed: 550,

    closeClick: true,

    beforeShow: function () {
      this.title = $(this.element).attr('title');
      this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
    },

    helpers: {
      title: {
        type: 'inside'
      },
      overlay: {
        css: {
          'background': 'rgba(0,0,0,0.8)'
        }
      }
    }
  });
});

// ========== TO THE TOP PAGE - HEADER ========== //
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('.back-to-header').fadeIn('slow');
  }
});

if ($(this).scrollTop() > 1) {
  $('.back-to-header').fadeIn('slow');
}

$('.back-to-header').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});

// ========== TO THE TOP PAGE ========== //

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

if ($(this).scrollTop() > 50) {
  $('.back-to-top').fadeIn('slow');
}

$('.back-to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});

// ===================================== //

var wow = new WOW({
  offset: 75,          // distance to the element when triggering the animation (default is 0)
  mobile: false,       // trigger animations on mobile devices (default is true)
});
wow.init();

