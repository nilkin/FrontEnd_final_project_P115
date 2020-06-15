$(document).ready(function () {
 // dropdown header icon change event

    $("#head-nav .navbar-menu li a").mouseenter(function () {
        $(this).children().removeClass("fa-angle-down");
        $(this).children().addClass("fa-angle-up");

    });
    $("#head-nav .navbar-menu li a").mouseleave(function () {
        $(this).children().removeClass("fa-angle-up");
        $(this).children().addClass("fa-angle-down");
    });


    //web sticky menu main page
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
    // dropdown icons 
    $("#head-nav-second .navbar-menu li a").mouseenter(function () {
        $(this).children().removeClass("fa-angle-down");
        $(this).children().addClass("fa-angle-up");
    });
    $("#head-nav-second .navbar-menu li a").mouseleave(function () {
        $(this).children().removeClass("fa-angle-up");
        $(this).children().addClass("fa-angle-down");

    });

    //web sticky menu second
    if ($("#head-nav-second").length) {
        $(window).scroll(function (e) {
            let scroll = $(window).scrollTop();
            if (scroll > 380) {
                $('#head-nav-second').addClass("sticky-menu-second");
                $("#head-nav-second .navbar .anada-brand img").attr("src", "assets/img/logo.png");

            }

            else {
                $('#head-nav-second').removeClass("sticky-menu-second");
                $("#head-nav-second .navbar .anada-brand img").attr("src", "assets/img/logo-light.png")
            }

        });
    }

    //mobile sticky menu second
    if ($("#mobile-menu").length) {
        $(window).scroll(function (e) {
            let scroll = $(window).scrollTop();
            if (scroll > 380) {
                $('#mobile-menu').addClass("mob-menu-sticky");
            }
            else {
                $('#mobile-menu').removeClass("mob-menu-sticky");

            }

        });
    }
    // owl carousel in features-items section
    $('.features-items').owlCarousel({
        stagePadding: 50,
        loop: true,
        merge: true,
        items: 2,
        autoWidth: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 3000,
    });
    // owl carousel in services-items section
    $('#services-items .services-carousel').owlCarousel({
        loop: false,
        margin: 10,

        responsive: {
            0: {
                items: 1
            },
            300:{
                items: 1
            },
            900: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })

    //  countTo with appear
 
    $(".timer-section").appear(function(){
        $(".timer").countTo();
    }, {
        accY: -100
    });

    // wow js 

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

    //  contact-area message button prevent default parametrs
    $('#contact-area .contact-items form button').click(function (e) {
        e.preventDefault();
        $('#contact-area .contact-items form #message').removeClass("d-none")

    })

    // side bar of main page (open and close)

    $("#head-nav .navbar-menu .attr-nav a i.flaticon-list").click(function (e) {
        e.preventDefault();

        $("#side-bar").animate({ right: '-20px', opacity: '1' }, 100);
        $("#side-bar .side-bar-items .close-bar .icon i").removeClass("fa-long-arrow-alt-right").addClass("fa-times");


    });
    $("#side-bar .side-bar-items .close-bar .icon i").click(function (e) {
        e.preventDefault();

        $("#side-bar .side-bar-items .close-bar .icon i").removeClass("fa-times").addClass("fa-long-arrow-alt-right");

        $("#side-bar").animate({ right: '-380px', opacity: '0' }, 100);


    });

    // side bar of other pages (open and close)

    $("#head-nav-second .attr-nav a i.flaticon-list").click(function (e) {
        e.preventDefault();

        $("#side-bar-second").animate({ right: '-20px', opacity: '1' }, 100);
        $("#side-bar-second .side-bar-items .close-bar .icon i").removeClass("fa-long-arrow-alt-right").addClass("fa-times");


    });
    $("#head-nav-second .attr-nav a i.flaticon-list").click(function (e) {


        $("#side-bar").animate({ right: '-20px', opacity: '1' }, 100);
        $("#side-bar .side-bar-items .close-bar .icon i").removeClass("fa-long-arrow-alt-right").addClass("fa-times");


    });

    $("#side-bar-second .side-bar-items .close-bar .icon i").click(function (e) {
        e.preventDefault();

        $("#side-bar-second .side-bar-items .close-bar .icon i").removeClass("fa-times").addClass("fa-long-arrow-alt-right");
        $("#side-bar-second").animate({ right: '-380px', opacity: '0' }, 100);


    });

    // side bar of mobile menus (open and close)

    $("#mobile-menu .mob-items .attribute .attr-nav a i.flaticon-list").click(function (e) {
        e.preventDefault();

        $("#side-bar").animate({ right: '-20px', opacity: '1' }, 100);
        $("#side-bar .side-bar-items .close-bar .icon i").removeClass("fa-long-arrow-alt-right").addClass("fa-times");

    });

    $("#mobile-menu .mob-items .attribute .attr-nav a i.flaticon-list").click(function (e) {
        e.preventDefault();

        $("#side-bar-second").animate({ right: '-20px', opacity: '1' }, 100);
        $("#side-bar-second .side-bar-items .close-bar .icon i").removeClass("fa-long-arrow-alt-right").addClass("fa-times");

    });

    // navbar-left-menu bar of mobile menus (open and close)
    $("#mobile-menu.mob-menu .mob-items .icon i.fa-bars").click(function (e) {
        e.preventDefault();
        $("#mobile-menu #navbar-left-menu").slideToggle(600);
        $(this).toggleClass("fa-times", 600);
    });
    $("#mobile-menu #navbar-left-menu .navbar-menu .nav-item .nav-link").click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle("slow");

    });

    // loader 

   $(window).on('load', function() {
       $(".loading").fadeOut("slow");;
   });


});

