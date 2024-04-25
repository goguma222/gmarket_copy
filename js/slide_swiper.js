var swiper = new Swiper(".main-slides", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".main-banner-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.start').css({'display':'none'});

$('.start').on('click', function() {
    $(this).css({'display':'none'});
    $('.stop').css({'display':'block'});
    swiper.autoplay.start();
    return false;
});

$('.stop').on('click', function() {
    $(this).css({'display':'none'});
    $('.start').css({'display':'block'});
    swiper.autoplay.stop();
    return false;
});


// 지금 제일 잘 나가는 상품
var swiper1 = new Swiper('.hot-list-slides', {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: '.hot-prd-next',
        prevEl: '.hot-prd-prev',
    },
});

var swiper3 = new Swiper(".smile-fresh-prd-slides", {
    navigation: {
        nextEl: ".smile-prd-btn-next1",
        prevEl: ".smile-prd-btn-prev1",
    },
});

var swiper4 = new Swiper(".smile-baesong-prd-slides", {
    navigation: {
        nextEl: ".smile-delivery-btn-next1",
        prevEl: ".smile-delivery-btn-prev1",
    },
});

var swiper5 = new Swiper(".product-list-wrap", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".smile-prd-btn-next2",
        prevEl: ".smile-prd-btn-prev2",
    },
});

var swiper6 = new Swiper(".today-power-list-inner-wrap", {
    slidesPerView: 5,
    spaceBetween: 20,
});

