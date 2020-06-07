$(document).ready(function () {
    $("#head-nav .navbar-menu li a").mouseenter(function () {
        $(this).children().removeClass("fa-angle-up");
        $(this).children().addClass("fa-angle-down");
    });
    $("#head-nav .navbar-menu li a").mouseleave(function () {
        $(this).children().removeClass("fa-angle-down");
        $(this).children().addClass("fa-angle-up");
    });

    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop: true,
        merge: true,
        items: 1,
        autoWidth:true,
        margin:1,
        // autoplay: true,
        autoplayTimeout: 5000,
    })
});

