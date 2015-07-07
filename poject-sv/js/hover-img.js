 $(document).ready(function() {
    $('.viewport').mouseenter(function(e) {
        $(this).children('a').children('img').animate({ height: '200', left: '0', top: '0', width: '260'}, 100);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '233', left: '0', top: '-20', width: '260'}, 100);
        $(this).children('a').children('span').fadeOut(200);
    });
});