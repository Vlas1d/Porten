const swiper = new Swiper('.div-scroll', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true,

});

var swiper1 = new Swiper(".div-scroll1", {
/*
    slidesPerView: (screen.availWidth >= 1200) ? 4 : 
    (screen.availWidth < 1200 && screen.availWidth >= 768) ? 3 :
    (screen.availWidth < 768 && screen.availWidth >= 544) ? 2 : 1, 
*/
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        544: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },

    spaceBetween: 25,
    freeMode: true,

    keyboard: {
        enabled: true,
        onlyInViewport:true,
        pageUpDown:true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    grabCursor: true,
});

const swiper2 = new Swiper('.div-scroll2', {

    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,

    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
});