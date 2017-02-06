$(function(){
    $(".section").css({"height":$(window).height()});
    $.scrollify({
      section : ".section",
      sectionName : "section-name",
      interstitialSection : "",
      easing: "easeOutQuad",
      scrollSpeed: 1100,
      offset : 0,
      updateHash: false,
      scrollbars: false,
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    });
});
