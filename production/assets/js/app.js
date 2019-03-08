(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function ($) {
    'use strict';

    $(function () {
        new WOW().init();
        var scroll = new SmoothScroll('a[href*="#"].sm-scroll');
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
        $('.fancybox').fancybox();
        $(".yButtonText").click(function () {
            _gaq.push(['_trackEvent', 'Button', 'Press']);
        });
        if ($('body').hasClass('en')) {
            $('.yButtonText').text('online booking');
        }
    });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsVUFBQyxDQUFELEVBQU87QUFDSjs7QUFDQSxNQUFFLFlBQU07QUFDSixZQUFJLEdBQUosR0FBVSxJQUFWO0FBQ0EsWUFBSSxTQUFTLElBQUksWUFBSixDQUFpQix3QkFBakIsQ0FBYjtBQUNBLGlCQUFTLFNBQVQsR0FBcUI7QUFDakIsZ0JBQUksTUFBTSxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBMEIsNEJBQTFCLENBQVY7QUFDQSxnQkFBSSxHQUFKLEVBQVM7QUFDTCxrQkFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLHdCQUFmLEVBQXlDLGNBQXpDO0FBQ0g7QUFDRCxxQkFBUyxjQUFULEdBQTBCO0FBQ3RCLDJCQUFXLFlBQVc7QUFDbEIsd0JBQUksVUFBVSxFQUFFLE1BQUYsRUFBVSxNQUFWLEVBQWQ7QUFDQSxzQkFBRSxTQUFGLEVBQWEsR0FBYixDQUFpQixRQUFqQixFQUEyQixPQUEzQjtBQUNILGlCQUhELEVBR0csR0FISDtBQUlIO0FBQ0o7QUFDRDtBQUNBLFVBQUUsV0FBRixFQUFlLFFBQWY7QUFDQSxVQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBVTtBQUM5QixpQkFBSyxJQUFMLENBQVUsQ0FBQyxhQUFELEVBQWdCLFFBQWhCLEVBQTBCLE9BQTFCLENBQVY7QUFDSCxTQUZEO0FBR0EsWUFBSSxFQUFFLE1BQUYsRUFBVSxRQUFWLENBQW1CLElBQW5CLENBQUosRUFBOEI7QUFDMUIsY0FBRSxjQUFGLEVBQWtCLElBQWxCLENBQXVCLGdCQUF2QjtBQUNIO0FBQ0osS0F2QkQ7QUF3QkgsQ0ExQkQsRUEwQkcsTUExQkgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKCgkKSA9PiB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICAkKCgpID0+IHtcclxuICAgICAgICBuZXcgV09XKCkuaW5pdCgpO1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXS5zbS1zY3JvbGwnKTtcclxuICAgICAgICBmdW5jdGlvbiBmaXhTY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIHZhciBpT1MgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBvZHxpUGhvbmV8aVBhZHxBbmRyb2lkKS8pO1xyXG4gICAgICAgICAgICBpZiAoaU9TKSB7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykuYmluZCgnbG9hZCBvcmllbnRhdGlvbmNoYW5nZScsIGlvc1ZoSGVpZ2h0QnVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpb3NWaEhlaWdodEJ1ZygpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpbmRvd0ggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNoZWFkZXJcIikuY3NzKCdoZWlnaHQnLCB3aW5kb3dIKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZml4U2Nyb2xsKCk7XHJcbiAgICAgICAgJCgnLmZhbmN5Ym94JykuZmFuY3lib3goKTtcclxuICAgICAgICAkKFwiLnlCdXR0b25UZXh0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIF9nYXEucHVzaChbJ190cmFja0V2ZW50JywgJ0J1dHRvbicsICdQcmVzcyddKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdlbicpKSB7XHJcbiAgICAgICAgICAgICQoJy55QnV0dG9uVGV4dCcpLnRleHQoJ29ubGluZSBib29raW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKGpRdWVyeSk7Il19
