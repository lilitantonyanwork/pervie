var swiper = new Swiper(".values-list.swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    allowTouchMove: true,
    freeMode: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2
        },
        // desktop >= 991
        1024: {
            slidesPerView: 3
        },
        1440:{
            slidesPerView: 3
        }
    }
});
var swiper2 = new Swiper(".story-list.swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    allowTouchMove: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // desktop >= 991
        991: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1440:{
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});
var swiper3 = new Swiper(".founders-list.swiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    allowTouchMove: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        600: {
            slidesPerView: 2
        },
        // desktop >= 991
        991: {
            slidesPerView: 3
        },
        1440:{
            slidesPerView: 4
        }
    }
});

var myNav = document.getElementById("nav");


window.onscroll = function() {
    if (myNav !== null){

    if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
        myNav.classList.add("scroll");
    } else {
        myNav.classList.remove("scroll");
    }

    }
};