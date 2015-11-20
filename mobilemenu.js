$(document).ready(function() {
    $('button.toggle').click(function() {
        $('header nav ul').slideToggle();
    });
});

$(window).resize(function() {
    ww = $(window).width();
    if (ww > 800) {
        $('header ul').show();
    } else {
        $('header ul').hide();
    };
});
