// Page loading

$(window).on("load", function() {
  $(".lds-roller")
    .delay(500)
    .fadeOut(500);
  $(".loading")
    .delay(500)
    .fadeOut(500);
});
$(document).ready(function() {
  // Sticky Navbar
  $(".js--header").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "-100px;"
    }
  );
  // navigation scroll

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // Animation on scroll

  $(".js--1").waypoint(
    function(direction) {
      $(".js--1").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );
  $(".js--2").waypoint(
    function(direction) {
      $(".js--2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );
  $(".js--3").waypoint(
    function(direction) {
      $(".js--3").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );
  $(".js--4").waypoint(
    function(direction) {
      $(".js--4").addClass("animated flash");
    },
    {
      offset: "90%"
    }
  );
  // Navigation current class (have problem, I disable it. should fix it or search for
  // others scripts)

  // $("#home").waypoint(
  //   function(direction) {
  //     $(".main-nav li a").removeClass("current");
  //     $("#home-nav").addClass("current");
  //   },
  //   {
  //     offset: "-50%"
  //   }
  // );
  // $("#about").waypoint(function(direction) {
  //   $(".main-nav li a").removeClass("current");
  //   $("#about-nav").addClass("current");
  // });
  // $("#services").waypoint(function(direction) {
  //   $(".main-nav li a").removeClass("current");
  //   $("#services-nav").addClass("current");
  // });
  // $("#portfolio").waypoint(function(direction) {
  //   $(".main-nav li a").removeClass("current");
  //   $("#portfolio-nav").addClass("current");
  // });
  // $("#blog").waypoint(function(direction) {
  //   $(".main-nav li a").removeClass("current");
  //   $("#blog-nav").addClass("current");
  // });
  // $("#contact").waypoint(
  //   function(direction) {
  //     $(".main-nav li a").removeClass("current");
  //     $("#contact-nav").addClass("current");
  //   },
  //   {
  //     offset: "30%"
  //   }
  // );
});

$(document).ready(function() {
  $(".js--skills").waypoint(
    function(direction) {
      $(".bar-first-part1").css({ width: "90%" });
      $(".bar-first-part2").css({ width: "85%" });
      $(".bar-first-part3").css({ width: "60%" });
      $(".bar-first-part4").css({ width: "70%" });
      $(".bar-second-part1").css({ width: "10%" });
      $(".bar-second-part2").css({ width: "15%" });
      $(".bar-second-part3").css({ width: "40%" });
      $(".bar-second-part4").css({ width: "30%" });
    },
    {
      offset: "70%"
    }
  );

  // Testimonial Owl Slider

  $(".slider-testimonial").owlCarousel({
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    loop: true
  });
  $(".slider-blog").owlCarousel({
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });

  // Portfolio Magnific Popup

  $(".gallery-magnific").magnificPopup({
    type: "image",
    gallery: { enabled: true }
  });
});

// Portfolio Gallery Filter

$(document).ready(function() {
  $(".js--development").click(function() {
    $(".development").removeClass("hide");
    $(".design").addClass("hide");
    $(".photography").addClass("hide");
  });
  $(".js--photography").click(function() {
    $(".photography").removeClass("hide");
    $(".development").addClass("hide");
    $(".design").addClass("hide");
  });
  $(".js--design").click(function() {
    $(".design").removeClass("hide");
    $(".photography").addClass("hide");
    $(".development").addClass("hide");
  });
  $(".js--all").click(function() {
    $(".design").removeClass("hide");
    $(".photography").removeClass("hide");
    $(".development").removeClass("hide");
  });

  // Add Current class for navigation menu
  $(".main-nav li a").click(function() {
    $(".main-nav li a").removeClass("current");
    $(this).addClass("current");
  });
});
