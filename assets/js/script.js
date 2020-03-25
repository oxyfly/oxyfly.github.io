$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true
  });
});

$(document).ready(function () {
  $(".regular").slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      },
    ]
  });

});

$(document).ready(function () {
  $('#nav-head').scrollToFixed();
});


$(document).ready(function () {

  var revapi;
  jQuery(document).ready(function () {
    revapi = jQuery('.fullwidthbanner').revolution({

      delay: 9000,
      startwidth: 1140,
      startheight: 400,
      hideThumbs: 200,

      thumbWidth: 100,
      thumbHeight: 50,
      thumbAmount: 3,

      navigationType: "none",
      navigationArrows: "solo",
      navigationStyle: "round",

      touchenabled: "on",
      onHoverStop: "on",

      navigationHAlign: "center",
      navigationVAlign: "bottom",
      navigationHOffset: 0,
      navigationVOffset: 20,

      soloArrowLeftHalign: "left",
      soloArrowLeftValign: "center",
      soloArrowLeftHOffset: 20,
      soloArrowLeftVOffset: 0,

      soloArrowRightHalign: "right",
      soloArrowRightValign: "center",
      soloArrowRightHOffset: 20,
      soloArrowRightVOffset: 0,

      shadow: 0,
      fullWidth: "on",
      fullScreen: "off",
      lazyLoad: "on",

      stopLoop: "on",
      stopAfterLoops: -1,
      stopAtSlide: -1,

      shuffle: "off",

      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      startWithSlide: 0,
    });
  });

});

///////////// Flip Blocks /////////////

jQuery(document).ready(function ($) {
  let countSquare = $('.square').length;
  for (i = 0; i < countSquare; i++) {
    let firstImage = $('.square').eq([i]);
    let secondImage = $('.square2').eq([i]);
    let getImage = firstImage.attr('data-image');
    let getImage2 = secondImage.attr('data-image');

    firstImage.css('background-image', 'url(' + getImage + ')');
    secondImage.css('background-image', 'url(' + getImage2 + ')');
  }
});