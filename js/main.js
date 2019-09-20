$(".circleChart").circleChart({
    widthRatio: 0.2,
    startAngle: 25,
    size: 140,
    background: false,
    color: "#e41b53"
});

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});