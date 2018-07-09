$(document).ready(function() {

    if($(document).width() < 640) {
        $('.artikel__news').addClass('owl-carousel');
        $(".owl-carousel").owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            margin: 20,
            navText : ["<img class='arrow-left' src='img/arrow.png' alt='Arrow'>", "<img class='arrow-right' src='img/arrow.png' alt='Arrow'>"]
        });
    }

    $(window).resize(function() {
        if($(document).width() < 640) {
            $('.artikel__news').addClass('owl-carousel');
            let owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 1,
                nav: true,
                loop: true,
                margin: 20,
                navText : ["<img class='arrow-left' src='img/arrow.png' alt='Arrow'>", "<img class='arrow-right' src='img/arrow.png' alt='Arrow'>"]
            });
        } else {
            let owl = $('.owl-carousel');
            owl.trigger('destroy.owl.carousel');
            $('.artikel__news').removeClass('owl-carousel');
        }
    });
});
