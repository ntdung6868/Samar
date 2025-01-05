AOS.init();
$(".counter").countUp({
    time: 1500,
});

// $(".blog__list").slick({
//     slidesToShow: 3,
//     dots: true,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     speed: 1000,
// });

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500, // Thời gian giữa các slide (đơn vị: ms)
    //     disableOnInteraction: false, // Tiếp tục autoplay sau khi tương tác
    // },
    // loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
