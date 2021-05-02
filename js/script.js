$(function () {


    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="../icons/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="../icons/arrow-rigth.png" alt=""></button>',


    });


})

$(function () {
    var mixer = mixitup('.products__inner-box');
})