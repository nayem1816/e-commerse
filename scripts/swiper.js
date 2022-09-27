var bannerSwiper = new Swiper('.bannerSwiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var trendingSwiper = new Swiper('.trendingSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
