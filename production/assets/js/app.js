(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _common = require('./modules/common');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
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
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/common":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var common = {
  wow: function wow() {}
};

exports.default = common;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxjb21tb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBOzs7Ozs7QUFFQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsSUFBRSxZQUFNO0FBQ04sUUFBSSxHQUFKLEdBQVUsSUFBVjtBQUNBLFFBQUksU0FBUyxJQUFJLFlBQUosQ0FBaUIsY0FBakIsQ0FBYjtBQUNGOztBQUVBLGFBQVMsU0FBVCxHQUFxQjs7QUFFbkIsVUFBSSxNQUFNLFVBQVUsU0FBVixDQUFvQixLQUFwQixDQUEwQiw0QkFBMUIsQ0FBVjs7QUFFQSxVQUFJLEdBQUosRUFBUztBQUNMLFVBQUUsTUFBRixFQUFVLElBQVYsQ0FBZSx3QkFBZixFQUF5QyxjQUF6QztBQUNIO0FBQ0QsZUFBUyxjQUFULEdBQTBCO0FBQ3RCLG1CQUFXLFlBQVk7QUFDbkIsY0FBSSxVQUFVLEVBQUUsTUFBRixFQUFVLE1BQVYsRUFBZDtBQUNBLFlBQUUsU0FBRixFQUFhLEdBQWIsQ0FBaUIsUUFBakIsRUFBMkIsT0FBM0I7QUFDSCxTQUhELEVBR0csR0FISDtBQUlIO0FBQ0Y7QUFDRDtBQUVDLEdBckJEO0FBdUJELENBM0JELEVBMkJHLE1BM0JILEUsQ0FQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxTQUFTO0FBQ1gsT0FBSyxlQUFXLENBRWY7QUFIVSxDQUFiOztrQkFNZSxNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxyXG4vL1xyXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXHJcbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxyXG5cclxuaW1wb3J0IGNvbW1vbiBmcm9tICcuL21vZHVsZXMvY29tbW9uJztcclxuXHJcbiggKCQpID0+IHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIC8vIFdoZW4gRE9NIGlzIHJlYWR5XHJcbiAgJCgoKSA9PiB7XHJcbiAgICBuZXcgV09XKCkuaW5pdCgpO1xyXG4gICAgdmFyIHNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJyk7XHJcbiAgLyogRml4IGlPUyA3IGJ1ZyBmb3IgLXVuaXQgc3VwcG9ydCAqL1xyXG5cclxuICBmdW5jdGlvbiBmaXhTY3JvbGwoKSB7XHJcblxyXG4gICAgdmFyIGlPUyA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUG9kfGlQaG9uZXxpUGFkfEFuZHJvaWQpLyk7XHJcbiAgICBcclxuICAgIGlmIChpT1MpIHtcclxuICAgICAgICAkKHdpbmRvdykuYmluZCgnbG9hZCBvcmllbnRhdGlvbmNoYW5nZScsIGlvc1ZoSGVpZ2h0QnVnKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlvc1ZoSGVpZ2h0QnVnKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgd2luZG93SCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgJChcIiNoZWFkZXJcIikuY3NzKCdoZWlnaHQnLCB3aW5kb3dIKTtcclxuICAgICAgICB9LCAzMDApOyBcclxuICAgIH1cclxuICB9XHJcbiAgZml4U2Nyb2xsKCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSkoalF1ZXJ5KTsiLCIvLyBUaGlzIGlzIGFuIGV4YW1wbGVzIG9mIHNpbXBsZSBleHBvcnQuXHJcbi8vXHJcbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXHJcblxyXG52YXIgY29tbW9uID0ge1xyXG4gIHdvdzogZnVuY3Rpb24oKSB7XHJcbiAgIFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1vbjsiXX0=
