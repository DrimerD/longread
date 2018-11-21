jQuery(document).ready(function ($) {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        speed: 500,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow:  '<button class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:  '<button class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
    });
});