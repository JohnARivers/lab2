$(document).ready(function () {
  if ($('.emergency').length > 0) {
    $('.navbar-fixed-top').css({      
      "margin-bottom": "0px",
      "margin-top": $('.emergency').outerHeight()
    });
    $('img.fixed-element').css("position", "relative");
    $('#masthead1').css('margin-top', $('.emergency').outerHeight());
  }
});
