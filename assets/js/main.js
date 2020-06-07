$(document).ready(function () {
    $("#head-nav .navbar-menu li a").mouseenter(function () {
        $(this).children().removeClass("fa-angle-up");
        $(this).children().addClass("fa-angle-down");
    });
    $("#head-nav .navbar-menu li a").mouseleave(function () {
        $(this).children().removeClass("fa-angle-down");
        $(this).children().addClass("fa-angle-up");
    });
    if ($("#head-nav").length) {
        $(window).scroll(function (e) {
            let scroll = $(window).scrollTop();
            if (scroll > 5) {
                $('#head-nav').addClass("sticky-menu");
            } else {
                $('#head-nav').removeClass("sticky-menu");
            }

        });
    }

    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop: true,
        merge: true,
        items: 1,
        autoWidth: true,
        margin: 40,
        // autoplay: true,
        autoplayTimeout: 5000,
    })

    $('.timer').countTo();
    $('.fun-fact').appear(function() {
        $('.timer').countTo();
    }, {
        accY: -100
    });
});

