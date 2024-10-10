var topopened = false
var botopened = false

$(document).ready(function(){
    $('#navbutton').click(function(e) {
        if ($(this).css("cursor") != "pointer") {
            return
        }
        
        var menu = $('#navmenu')
        .stop(true, true)

        var list = menu.find('> ul')
        .stop(true, true)

        if (topopened) {
            menu.animate({
                height: "100%",
                opacity: 0,
              }, 500, function() {
                  menu.attr('style','')
              });
            
            list.animate({
                opacity: 0,
              }, 500, function() {
                  list.attr('style','')
              });
            
            $('body, html').removeClass('noscroll')
            $(this).removeClass('opened')
            topopened = false
        } else {
            
            menu.css('opacity', '0').css('display', 'block')
            .animate({
                height: "100vh",
                opacity: 1,
              }, 500);
            
            list.delay(200).fadeIn(500);
            
            var body = $('body, html')
            body.addClass('noscroll')
            
            if ($('#topbar').css('position') != 'fixed') {
                body.animate({ scrollTop: 0 }, "slow");
            }
            $(this).addClass('opened')
            
            topopened = true
        }
    });
    $('#botmenu > ul > li > h4').click(function(e) {
        if ($(this).css("cursor") != "pointer") {
            return
        }
        
        var li = $(this).parent()
        var opened = li.hasClass('opened')
        
        $('#botmenu > ul > li.opened').removeClass('opened')
        
        if (!opened) {
            li.addClass('opened')
        }
        botopened = !opened
    });
    $('.sidemenu > nav > h6').click(function(e) {
        if ($(this).css("cursor") != "pointer") {
            return
        }
        $(this).parent().toggleClass('closed')
    });
 });


$(window).focus(function() {
    restoreMenus()
});
$(window).on('resize', function() {
    restoreMenus()
});

var restoreMenus = function restoreMenus() {
    if (botopened) {
        var botmenu = $("#botmenu")
        if (botmenu.width() > 700) {
            botmenu.find('> ul > li.opened').removeClass('opened')
            botopened = false
        }
    }
    
    if (topopened) {
        if ($(window).width() > 600) {
            
            $('body,html').removeClass('noscroll')
            
            $('#navmenu').attr('style','')
            .find('> ul').attr('style','')
            
            $('#navbutton').removeClass('opened')
            
            topopened = false
        }
    }
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
