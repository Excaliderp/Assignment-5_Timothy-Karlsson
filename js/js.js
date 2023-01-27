$(function () {

  $(".nav-button").on({
    mouseenter: function () {
      $(this).toggleClass("active");
    },
    mouseleave: function () {
      $(this).toggleClass("active");
    },
    click: function (e) {
      $(this).siblings().find(".sub-menu").hide();
      $(this).find(".sub-menu").toggle();
      e.stopPropagation();
    }
  });

  $(".sub-menu p").on({
    mouseenter: function () {
      $(this).toggleClass("active");
    },
    mouseleave: function () {
      $(this).toggleClass("active");
    }
  })

  $(document).click(function () {
    $(".sub-menu").hide();
    $(".burger-submenu").hide();
  })

  $(".show-more").on({
    mouseenter: function () {
      $(this).toggleClass("active");
    },
    mouseleave: function () {
      $(this).toggleClass("active");
    },
    click: function () {
      $(this).siblings(".info").slideToggle(200);

      if($(this).text() === "Show more"){
        $(this).text("Show less");
      } else {
        $(this).text("Show more");
      }
    }
  });

  $(".hamburger-button").on("click", function (e){
    $(".burger-submenu").slideToggle(200);
    e.stopPropagation();
  })

});
