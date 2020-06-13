$(document).ready(function () {
    $("#head-nav .navbar-menu li a").mouseenter(function () {
        $(this).children().removeClass("fa-angle-down");
        $(this).children().addClass("fa-angle-up");

    });
    $("#head-nav .navbar-menu li a").mouseleave(function () {
        $(this).children().removeClass("fa-angle-up");
        $(this).children().addClass("fa-angle-down");
    });
    if ($("#head-nav").length) {
        $(window).scroll(function (e) {
            let scroll = $(window).scrollTop();
            if (scroll > 380) {
                $('#head-nav').addClass("sticky-menu");
            } else {
                $('#head-nav').removeClass("sticky-menu");
            }

        });
    }

    $("#head-nav-second .navbar-menu li a").mouseenter(function () {
        $(this).children().removeClass("fa-angle-down");
        $(this).children().addClass("fa-angle-up");
    });
    $("#head-nav-second .navbar-menu li a").mouseleave(function () {
        $(this).children().removeClass("fa-angle-up");
        $(this).children().addClass("fa-angle-down");

    });
    if ($("#head-nav-second").length) {
        $(window).scroll(function (e) {
            let scroll = $(window).scrollTop();
            if (scroll > 380) {
                $('#head-nav-second').addClass("sticky-menu-second");
                $("#head-nav-second .navbar .anada-brand img").attr("src", "/assets/img/logo.png")

            } else {
                $('#head-nav-second').removeClass("sticky-menu-second");
                $("#head-nav-second .navbar .anada-brand img").attr("src", "/assets/img/logo-light.png")
            }

        });
    }


    $('.features-items').owlCarousel({
        stagePadding: 50,
        loop: true,
        merge: true,
        items: 1,
        autoWidth: true,
        margin: 40,
        // autoplay: true,
        autoplayTimeout: 5000,
    });

    $('#services-items .services-carousel').owlCarousel({
        loop: false,
        margin: 10,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    $('.timer').countTo();

    function wowAnimation() {
        let wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }
    $(window).on('load', function () {
        wowAnimation();
    });

    $('#contact-area .contact-items form button').click(function(e){
        e.preventDefault();
        $('#contact-area .contact-items form #message').removeClass("d-none")
       
    })



});

