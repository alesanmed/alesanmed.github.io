(function($){
    $(function(){
        $('.parallax').parallax();

        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
                width: $(this).attr("data-width")
            },2000)
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
  