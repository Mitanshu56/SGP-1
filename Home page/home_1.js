
// Swiper initialization
let swiper = new Swiper(".mySwiper", {
  loop:true,
  autoplay:{
      delay :3000,
      disableOnInteraction:false,
  },
  speed :1000,
  navigation:{
      nextEl :".swiper-button-next",
      prevEl :".swiper-button-prev",
  },
});
