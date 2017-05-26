(function($) {

  if ($('#backtotop').length) {

    var scrollTrigger = 100, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#backtotop').addClass('show');
      } else {
        $('#backtotop').removeClass('show');
      }
    };

    backToTop();

    $(window).bind('scroll', function () {
      backToTop();
    });

  }

  $('#backtotop').click( function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });

})(jQuery);
