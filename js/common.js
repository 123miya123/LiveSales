(function () {
  $(".js-nav > li").hover(function () {
    var t = $(".js-nav").parent().offset().left,
      i = 15,
      n = $(this),
      e = n.offset().left - t + i;
    $(".js-menu-act").css({
      left: e,
      width: n.width() - 2 * i,
      opacity: 1
    })
  }, function () {
    $(".js-menu-act").css({
      opacity: 0
    })
  })
})()
