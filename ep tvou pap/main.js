
const swiper = new Swiper('.swiper', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
    slidesPerView: 1,
    spaceBetween: 20,
    
    breakpoints: {
      1450: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });