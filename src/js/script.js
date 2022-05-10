$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
    //  adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab-active)",
    function () {
      $(this)
        .addClass("catalog__tab-active")
        .siblings()
        .removeClass("catalog__tab-active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content-active")
        .eq($(this).index())
        .addClass("catalog__content-active");
    }
  );
});
