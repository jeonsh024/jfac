!(function ($) {
  "use strict";

  $(document).on("click", ".nav-menu a, .scrollto", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($("#header").length) {
          scrollto -= $("#header").outerHeight();

          if (!$("#header").hasClass("small")) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == "#header") {
          scrollto = 0;
        }

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1000,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }
        return false;
      }
    }
  });

  var nav_sections = $("section");
  var main_nav = $(".nav-menu");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 80;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          alert("1");
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Toggle .small class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header, .mobile-nav").addClass("small");
    } else {
      $("#heade, .mobile-nav").removeClass("small");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header, .mobile-nav").addClass("small");
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#top").fadeIn("slow");
    } else {
      $("#top").fadeOut("slow");
    }
  });

  $("#top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  var isplay = true;

  $(".menu-up").hide();
  $(".m-nav-menu .cs-menu a").click(function () {
    // $(this).next(".list-wrap").slideToggle(500);
    // $(this).find(".menu-up, .menu-down").toggle();

    if (isplay) {
      $(this).next(".list-wrap").slideDown();
      $(".menu-up").show();
      $(".menu-down").hide();
      $(".m-nav-menu .cs-menu > a").css({
        background: "#1f5daa",
        color: "#fff",
      });
    } else {
      $(this).next(".list-wrap").slideUp();
      $(".menu-down").show();
      $(".menu-up").hide();
      $(".m-nav-menu .cs-menu > a").css({
        background: "#fff",
        color: "#191919",
      });
    }
    isplay = !isplay;
  });

  // $(".mobile-nav").css("width", "0");

  // $(".menu-btn").on("click", function () {
  //   $(".mobile-nav").show().animate({ width: "85%" });
  //   $(".close-btn").show();
  //   $(this).hide();
  //   $("#bg").fadeIn();
  // });

  // $(".close-btn").on("click", function () {
  //   $(".mobile-nav").show().animate({ width: "0" });
  //   $(".menu-btn").show();
  //   $(this).hide();
  //   $("#bg").fadeOut();
  // });

  // $("#bg").on("click", function () {
  //   $(".mobile-nav").show().animate({ width: "0" });
  //   $(".menu-btn").show();
  //   $(".close-btn").hide();
  //   $(this).fadeOut();
  // }); // mobile menu END
})(jQuery);
