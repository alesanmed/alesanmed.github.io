(function($){
    $(function(){
        $('.parallax').parallax();

        $('.materialboxed').materialbox({
            onOpenStart: materialboxOpen
        });

        $(document).ready(function(){
            $('.scrollspy').scrollSpy();
        });

        var $win = $(window);
        var $stat = $('.section-technologies');

        $win.on('scroll', function () {
            var scrollTop = $win.scrollTop();
        
            $stat.each(function () {
                var $self = $(this);
                var prev=$self.offset();
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


function materialboxOpen(element) {
    var originalWidth = $(element).data('original-width');
    var originalHeight = $(element).data('original-height');

    if(originalWidth !== undefined && originalHeight !== undefined) {
        M.Materialbox.getInstance(element).originalWidth = originalWidth;
        M.Materialbox.getInstance(element).originalHeight = originalHeight;
    }
}