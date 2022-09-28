var bannerSwiper = new Swiper('.bannerSwiper', {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

var trendingSwiper = new Swiper('.trendingSwiper', {
    loop: true,
    loopFillGroupWithBlank: true,
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
        1440: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

var dealsSwiper = new Swiper('.dealsSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
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

var trendingOfferSwiper = new Swiper('.trendingOfferSwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    initialSlide: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});

var customerSaySwiper = new Swiper('.customerSaySwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    initialSlide: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
