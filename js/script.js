document.addEventListener("DOMContentLoaded", () => {
  //비주얼 슬라이더
  const teamswiper = new Swiper(".team-slider", {
    // direction: "horizontal",
    loop: true,
    slidesPerView: 1,

    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    autoplay: {
      // 자동 재생 설정
      delay: 3000, // 3초마다 슬라이드 변경
      disableOnInteraction: false, // 사용자가 스와이프해도 자동 재생 유지
    },

    pagination: {
      el: ".swiper-pagination",
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
});
