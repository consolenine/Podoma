$(document).ready(function() {
    AOS.init();
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        }
    });
    
})