(function ($) {
  // app object --- module scaffolding
  const app = {};
  $(document).ready(function () {
    app.flyMenuHandle = () => {
      // Toggle Handler
      $("#fly-menu-toggle").click(function (e) {
        e.preventDefault();
        $("body").toggleClass("active");
      });
      //window resize Handler
      $(window).resize(function () {
        // operation making
        const addClass = () => {
          $("body").removeClass("active");
        };
        // Check Window width and action
        let currentWidth = $(window).innerWidth();
        if (currentWidth > 992) {
          addClass();
        }
      });
    };
    app.flyMenuHandle();

    //Header sticky
    app.headerSticky = function () {
      /*=============== CHANGE STICKY HEADER ===============*/
      const scrollHeader = () => {
        const header = document.getElementById("header");
        // Add a class if the bottom offset is greater than 100 of the viewport
        window.scrollY >= 100
          ? header.classList.add("sticky")
          : header.classList.remove("sticky");
      };
      window.addEventListener("scroll", scrollHeader);

      const isHide = sessionStorage.getItem("isHide"),
        noticeBar = document.getElementById("notice-bar"),
        toggleNoticeBar = document.getElementById("notice-toggle");
      //Add a class if sessionStorage have isHide true
      if (isHide) {
        noticeBar.classList.add("hide");
      }
      //Notice Board Fun.. Handle and add classes
      const noticeHandle = () => {
        sessionStorage.setItem("isHide", true);
        noticeBar.classList.add("hide");
      };
      toggleNoticeBar.addEventListener("click", noticeHandle);
    };
    app.headerSticky();
    // User review carousel
    app.userReviewCarousel = () => {
      $("#review-carousel").owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 4,
          },
        },
      });
    };
    app.userReviewCarousel();
  });
})(jQuery);
