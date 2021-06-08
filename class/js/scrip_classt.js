$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  //   Infinity: false,
  // autoplay: true,
  // autoplaySpeed: 500,
  pouseOnFocus: false,
  speed: 3000,
  cssEase: "linear",
  // dots: true,
  arrows: false,
  fade: true,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
});
$slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  console.log(nextSlide);
});
