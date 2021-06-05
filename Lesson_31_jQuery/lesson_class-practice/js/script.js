const $header = $(".header");
const $body = $(".body");

$header.on("click", function () {
  $body.stop().slideUp();
  $(this).next().stop().slideToggle();
});
