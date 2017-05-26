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
  $('#backtotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
}
