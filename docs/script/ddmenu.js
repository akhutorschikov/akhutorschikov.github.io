$(document).ready(function(){
    
    openSectionWithHash()
    
    $(window).on('hashchange', function(e) {
        $('.ddmenu > li').removeClass('opened')
        openSectionWithHash()
    });
    
    $('.ddmenu > li > h4').click(function(e) {
        $(this).parent().toggleClass('opened')
    });
});

var openSectionWithHash = function openSectionWithHash() {
    if (window.location.hash) {
        var hash = window.location.hash.substring(1)
        var el = $('#' + hash)
        
        if (el.length > 0) {
            if (el.parent().hasClass('ddmenu')) {
                el.addClass('opened')
            }
            el.get(0).scrollIntoView()
        }
        
    }
}
