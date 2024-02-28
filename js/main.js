$(document).ready(function() {
    const featuredProductSwiper = new Swiper('.featured-product-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        // autoplay: {
        //     delay: 2000
        // },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
    });
    const categorySwiper = new Swiper('.category-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            600: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 3,
                spaceBetween: 60
            }
        },
        centeredSlides: true
    });
    const instagramSwiper = new Swiper('.instagram-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        // If we need pagination
        autoplay: {
            delay: 2000
        },
        effect: 'fade',
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            // when window width is >= 480px
            600: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 1,
                spaceBetween: 40
            }
        },
        centeredSlides: true
    });

    const tipsSwiper = new Swiper('.tips-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            // when window width is >= 480px
            600: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        centeredSlides: true
    });
    
})