//when page starts all function is called
$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

//closes burger menu popup
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

//smooth scrolling
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });


//smooth scroll to go to top of page (up arrow)
    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

//fade in ,only fadein once
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});