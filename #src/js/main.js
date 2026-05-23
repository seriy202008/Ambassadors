import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import textCrop from './textCrop.js';
import activateBurger from './burgerMenu.js';
import scrollForAnchors from './ancorsScroll.js';


// Now you can use Swiper

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('#slider', {
        // Install modules
        modules: [Navigation, Pagination],
        loop: false,
        speed: 500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            addIcons: false,
            enabled: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            enabled: true,

        },
        slidesPerView: 1,
        width: 270,
        height: 180,
        breakpoints: {
            // when window width is >= 320px
            320: {
                width: 270,
                height: 180,

            },
            // when window width is >= 480px
            480: {
                width: 370,
                height: 247,
            },
            // when window width is >= 640px
            768: {
                width: 674,
                height: 449,
                pagination: {
                    enabled: true,
                },
                navigation: {
                    enabled: false,
                },

            },
            1024: {
                width: 930,
                height: 560,
                pagination: {
                    enabled: false,
                },
                navigation: {
                    enabled: true,
                },
            },
            1440: {
                width: 968,
                height: 645,
                pagination: {
                    enabled: false,
                },
                navigation: {
                    enabled: true,
                },
            },
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('#slider2', {
        // Install modules
        modules: [Pagination],
        loop: false,
        speed: 500,
        slidesPerView: 1,
        width: 300,
        height: 215,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            enabled: true,

        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                width: 300,
                height: 215,
                spaceBetween: 10,

            },
            // when window width is >= 480px
            480: {
                width: 400,
                height: 290,
                spaceBetween: 10,
            },
            // when window width is >= 640px
            768: {
                width: 550,
                height: 380,
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1024: {
                width: 550,
                height: 380,
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {

                    enabled: false,

                },
            },

            1440: {
                width: 1130,
                slidesPerView: 2,
            },
            1920: {
                width: 1710,
                slidesPerView: 3,
            },
        }
    });
});

textCrop("view--text", 490);
activateBurger(".header--burgerBtn", ".menu--burgerBtn", ".menu", ".menu--link", ".menu--darked");
scrollForAnchors();