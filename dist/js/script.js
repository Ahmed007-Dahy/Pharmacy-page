const swiper = new Swiper('.slide-content', {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: '.swiper-button--next',
        prevEl: '.swiper-button--prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
    },
});
const swiper1 = new Swiper('.slide-content1', {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: '.swiper-button--next1',
        prevEl: '.swiper-button--prev1',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
const swiper2 = new Swiper('.slide-content2', {
    slidesPerView: 1,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: '.swiper-button--next2',
        prevEl: '.swiper-button--prev2',
    },

    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //     },
    //     520: {
    //         slidesPerView: 1,
    //     },
    //     950: {
    //         slidesPerView: 1,
    //     },
    //     1100: {
    //         slidesPerView: 1,
    //     },
    // },
});
