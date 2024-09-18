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

    // Form Handle
    app.formInputValidation = () => {
      $("#subscribe-email").keyup(function () {
        let inputValue = this.value;
        const email = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
        if (email.test(inputValue)) {
          $("#not-valid-email-msg").addClass("d-none");
          $("#valid-email-msg").removeClass("d-none");
          $("#valid-email-msg").addClass("d-block");
        } else {
          $("#valid-email-msg").addClass("d-none");
          $("#not-valid-email-msg").removeClass("d-none");
          $("#not-valid-email-msg").addClass("d-block");
        }
      });
    };
    app.formHandle = () => {
      $("#email-submit-form").submit(async function (e) {
        e.preventDefault();
        let inputValue = $("#subscribe-email").val();
        const email = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
        if (email.test(inputValue) && inputValue.length > 1) {
          let readyData = JSON.stringify(inputValue);
          console.log(readyData);
          await fetch("http://localhost:4321/subscribe/news", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: readyData,
          })
            .then((res) => res.json())
            .then((data) => {
              $("#valid-email-msg").text(data.massage);
            })
            .catch((err) => console.log(err));
          $("#not-valid-email-msg").addClass("d-none");
          $("#valid-email-msg").removeClass("d-none");
          $("#valid-email-msg").addClass("d-block");
          $("#subscribe-email").val("");
        } else {
          $("#valid-email-msg").addClass("d-none");
          $("#not-valid-email-msg").removeClass("d-none");
          $("#not-valid-email-msg").addClass("d-block");
          $("#not-valid-email-msg").text("Use Valid Email After Submit!!");
        }
      });
    };
    app.formInputValidation();
    app.formHandle();
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
