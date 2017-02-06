import Scrollify from './node_modules/jquery-scrollify/jquery-scrollify.js';

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
    console.log($.scrollify.stop)
});
