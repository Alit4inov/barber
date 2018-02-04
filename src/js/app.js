(($) => {
    'use strict';
    $(() => {
        new WOW().init();
        var scroll = new SmoothScroll('a[href*="#"]');
        function fixScroll() {
            var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/);
            if (iOS) {
                $(window).bind('load orientationchange', iosVhHeightBug);
            }
            function iosVhHeightBug() {
                setTimeout(function() {
                    var windowH = $(window).height();
                    $("#header").css('height', windowH);
                }, 300);
            }
        }
        fixScroll();
        $('.fancybox').fancybox();
    });
})(jQuery);