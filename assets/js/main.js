$(document).ready(function () {
  $(".testimoni-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    center: true,
    autoplayHoverPause: false,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
    },
  });

  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
  });
});
