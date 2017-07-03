
//關於rwd 字形大小
(function ($) {
    $.fn.rwdFitText = function (opts) {
        // default configuration
        var config = $.extend({}, {
            opt1: null
        }, opts);
        // main function
        function restFontSize(e) {
            var rwdFont = function () {
                if ($(window).width() <= 640 && $(window).width() > 320) {
                    var ration = 0;
                    if ($(window).width() >= 320) {
                        ration = $(window).width() / 640;
                    } else {
                        ration = 0.5; //用來控制最小縮放比率的數值
                    }
                    var fontScale = (ration * 100) * 0.625;
                    $('html').css('font-size', fontScale + "%");
                } else if ($(window).width() > 640) {
                    $('html').css('font-size', "62.5" + "%")
                }
            };
            $(window).resize(function () {
                rwdFont();
            });
            rwdFont();
        }
        // initialize every element
        this.each(function () {

            restFontSize($(this));
        });
        return this;
    };
    // start
    $(function () {
        $("html").rwdFitText();

    });
})(jQuery);