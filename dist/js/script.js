
// UI Design and Code by Mohammad Alavi Copyright (c) 2019
// Github Account: https://github.com/mohammad00alavi
// Email: smalavi71@gmail.com
// Linkedin: https://www.linkedin.com/in/mohammad00alavi/

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
});

// Skills Section - Skill Bars Animation on scroll

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

$(".js--development").click(function() {
  $(".development").delay(200).fadeIn(200);
  $(".design,.photography").fadeOut(200);
  galleryFilter(this);
});
$(".js--photography").click(function() {
  $(".photography").delay(200).fadeIn(200);
  $(".development,.design").fadeOut(200);
  galleryFilter(this);
});
$(".js--design").click(function() {
  $(".design").delay(200).fadeIn(200);
  $(".photography,.development").fadeOut(200);
  galleryFilter(this);
});
$(".js--all").click(function() {
  $(".photography,.development,.design").delay(200).fadeIn(200);
  galleryFilter(this);
});

function galleryFilter(x) {
  $('.filter span').removeClass('fil-current');
  $(x).addClass('fil-current');
}

// Add Current class for navigation menu

$(".main-nav li a").click(function() {
  $(".main-nav li a").removeClass("current");
  $(this).addClass("current");
});

