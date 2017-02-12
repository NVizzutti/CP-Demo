
$(function(){
    $(".section").css({"height":$(window).height()});
    $.scrollify({
      section : ".section",
      sectionName : "section-name",
      interstitialSection : "",
      easing: "easeOutQuad",
      scrollSpeed: 1100,
      offset : 0,
      updateHash: true,
      scrollbars: true,
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    });
});

$("i").click(() => {
  console.log('inside');
  var up = jQuery.Event('keydown');
  up.which = 40;
  up.keyCode = 40;
  $(document).trigger(up);
});
