(function($){
    $(function(){
        $('.parallax').parallax();

        var $win = $(window);
        var $stat = $('.section-technologies');

        $win.on('scroll', function () {
            var scrollTop = $win.scrollTop();
        
            $stat.each(function () {
                var $self = $(this);
                var prev=$self.offset();
                console.log("Scrolltop: " + scrollTop)
                console.log("Prevtop: " + prev.top)
                if ( (scrollTop - prev.top) > -1000) {
                    $('.bar').each(function() {
                        $(this).find(".bar-inner").animate({
                            width: $(this).attr("data-width")
                        },2000)
                    })
                }
            });
        }).scroll();
    }); // end of document ready
})(jQuery); // end of jQuery name space
  