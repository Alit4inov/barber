// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import common from './modules/common';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    new WOW().init();
    var scroll = new SmoothScroll('a[href*="#"]');
  /* Fix iOS 7 bug for -unit support */

  function fixScroll() {

    var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/);
    
    if (iOS) {
        $(window).bind('load orientationchange', iosVhHeightBug);
    }
    function iosVhHeightBug() {
        setTimeout(function () {
            var windowH = $(window).height();
            $("#header").css('height', windowH);
        }, 300); 
    }
  }
  fixScroll();

  });

})(jQuery);