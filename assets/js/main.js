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
                $("#head-nav-second .navbar .anada-brand img").attr("src", "/assets/img/logo.png");

            }

            else {
                $('#head-nav-second').removeClass("sticky-menu-second");
                $("#head-nav-second .navbar .anada-brand img").attr("src", "/assets/img/logo-light.png")
            }

        });
    }

    if ($("#mobile-menu").length) {
        $(window).scroll(function (e) {
            let scroll = $(window).scrollTop();
            if (scroll > 180) {
                $('#mobile-menu').addClass("mob-menu-sticy");
            }
            else {
                $('#mobile-menu').removeClass("mob-menu-sticy");

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
        autoplay: true,
        autoplayTimeout: 3000,
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

    $('#contact-area .contact-items form button').click(function (e) {
        e.preventDefault();
        $('#contact-area .contact-items form #message').removeClass("d-none")

    })

    $("#head-nav .navbar-menu .attr-nav a i.flaticon-list").click(function (e) {
        e.preventDefault();
        console.log($("#side-bar"))
        $("#side-bar").animate({ right: '-20px', opacity: '1' }, 100);
        $("#side-bar .side-bar-items .close-bar .icon i").removeClass("fa-long-arrow-alt-right").addClass("fa-times");


    });
    $("#side-bar .side-bar-items .close-bar .icon i").click(function (e) {
        e.preventDefault();
        console.log($("#side-bar"));
        $("#side-bar .side-bar-items .close-bar .icon i").removeClass("fa-times").addClass("fa-long-arrow-alt-right");

        $("#side-bar").animate({ right: '-380px', opacity: '0' }, 100);


    });
    $("#head-nav-second .attribut .attr-nav a i.flaticon-list").click(function (e) {
        e.preventDefault();
        console.log($("#side-bar"))
        $("#side-bar-second").animate({ right: '-20px', opacity: '1' }, 100);
        $("#side-bar-second .side-bar-items .close-bar .icon i").removeClass("fa-long-arrow-alt-right").addClass("fa-times");


    });
    $("#mobile-menu .mob-items .attribute .attr-nav a i.flaticon-list").click(function (e) {
        e.preventDefault();
        console.log($("#side-bar"))
        $("#side-bar").animate({ right: '57.7rem', opacity: '1' }, 100);
        $("#side-bar .side-bar-items .close-bar .icon i").removeClass("fa-long-arrow-alt-right").addClass("fa-times");

    });

    $("#mobile-menu .mob-items .attribute .attr-nav a i.flaticon-list").click(function (e) {
        e.preventDefault();
        console.log($("#side-bar"))
        $("#side-bar-second").animate({ right: '-20px', opacity: '1' }, 100);
        $("#side-bar-second .side-bar-items .close-bar .icon i").removeClass("fa-long-arrow-alt-right").addClass("fa-times");

    });

    $("#side-bar-second .side-bar-items .close-bar .icon i").click(function (e) {
        e.preventDefault();
        console.log($("#side-bar"));
        $("#side-bar-second .side-bar-items .close-bar .icon i").removeClass("fa-times").addClass("fa-long-arrow-alt-right");
        $("#side-bar-second").animate({ right: '-380px', opacity: '0' }, 100);


    });

    $("#mobile-menu.mob-menu .mob-items .icon i.fa-bars").click(function (e) {
        e.preventDefault();
        $("#mobile-menu #navbar-left-menu").slideToggle(100).removeClass("d-none");
        $(this).toggleClass("fa-times");
    });
    $("#mobile-menu #navbar-left-menu .navbar-menu .nav-item .nav-link").click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle("slow").removeClass("d-none");
        console.log($(this).next());

    });
});

