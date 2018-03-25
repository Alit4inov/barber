(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function ($) {
    'use strict';

    $(function () {
        new WOW().init();
        var scroll = new SmoothScroll('a[href*="#"]');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsVUFBQyxDQUFELEVBQU87QUFDSjs7QUFDQSxNQUFFLFlBQU07QUFDSixZQUFJLEdBQUosR0FBVSxJQUFWO0FBQ0EsWUFBSSxTQUFTLElBQUksWUFBSixDQUFpQixjQUFqQixDQUFiO0FBQ0EsaUJBQVMsU0FBVCxHQUFxQjtBQUNqQixnQkFBSSxNQUFNLFVBQVUsU0FBVixDQUFvQixLQUFwQixDQUEwQiw0QkFBMUIsQ0FBVjtBQUNBLGdCQUFJLEdBQUosRUFBUztBQUNMLGtCQUFFLE1BQUYsRUFBVSxJQUFWLENBQWUsd0JBQWYsRUFBeUMsY0FBekM7QUFDSDtBQUNELHFCQUFTLGNBQVQsR0FBMEI7QUFDdEIsMkJBQVcsWUFBVztBQUNsQix3QkFBSSxVQUFVLEVBQUUsTUFBRixFQUFVLE1BQVYsRUFBZDtBQUNBLHNCQUFFLFNBQUYsRUFBYSxHQUFiLENBQWlCLFFBQWpCLEVBQTJCLE9BQTNCO0FBQ0gsaUJBSEQsRUFHRyxHQUhIO0FBSUg7QUFDSjtBQUNEO0FBQ0EsVUFBRSxXQUFGLEVBQWUsUUFBZjtBQUNBLFVBQUUsY0FBRixFQUFrQixLQUFsQixDQUF3QixZQUFVO0FBQzlCLGlCQUFLLElBQUwsQ0FBVSxDQUFDLGFBQUQsRUFBZ0IsUUFBaEIsRUFBMEIsT0FBMUIsQ0FBVjtBQUNILFNBRkQ7QUFHQSxZQUFJLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsSUFBbkIsQ0FBSixFQUE4QjtBQUMxQixjQUFFLGNBQUYsRUFBa0IsSUFBbEIsQ0FBdUIsZ0JBQXZCO0FBQ0g7QUFDSixLQXZCRDtBQXdCSCxDQTFCRCxFQTBCRyxNQTFCSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoKCQpID0+IHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgICQoKCkgPT4ge1xyXG4gICAgICAgIG5ldyBXT1coKS5pbml0KCk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJyk7XHJcbiAgICAgICAgZnVuY3Rpb24gZml4U2Nyb2xsKCkge1xyXG4gICAgICAgICAgICB2YXIgaU9TID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQb2R8aVBob25lfGlQYWR8QW5kcm9pZCkvKTtcclxuICAgICAgICAgICAgaWYgKGlPUykge1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLmJpbmQoJ2xvYWQgb3JpZW50YXRpb25jaGFuZ2UnLCBpb3NWaEhlaWdodEJ1Zyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gaW9zVmhIZWlnaHRCdWcoKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aW5kb3dIID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjaGVhZGVyXCIpLmNzcygnaGVpZ2h0Jywgd2luZG93SCk7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpeFNjcm9sbCgpO1xyXG4gICAgICAgICQoJy5mYW5jeWJveCcpLmZhbmN5Ym94KCk7XHJcbiAgICAgICAgJChcIi55QnV0dG9uVGV4dFwiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBfZ2FxLnB1c2goWydfdHJhY2tFdmVudCcsICdCdXR0b24nLCAnUHJlc3MnXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnZW4nKSkge1xyXG4gICAgICAgICAgICAkKCcueUJ1dHRvblRleHQnKS50ZXh0KCdvbmxpbmUgYm9va2luZycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KShqUXVlcnkpOyJdfQ==
