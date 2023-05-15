import Swiper from 'swiper/bundle';

const collectionsSwiper = new Swiper('.collections-swiper', {
  slidesPerView: 1,
  speed: 700,
  effect: 'fade',
  allowTouchMove: false,
  autoplay: {
    delay: 6000
  },
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.collections-swiper-button-next',
    prevEl: '.collections-swiper-button-prev'
  },
  scrollbar: {
    el: '.collections-swiper-scrollbar',
    draggable: true
  }
});

const categoriesSwiper = new Swiper('.categories-swiper', {
  slidesPerView: 1,
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 'auto'
    }
  }
});

const productsSwiper = new Swiper('.products-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.products-swiper-button-next',
    prevEl: '.products-swiper-button-prev'
  },
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    1280: {
      slidesPerView: 4
    }
  }
});

const productsItemSwiper = new Swiper('.products-item-swiper', {
  slidesPerView: 1,
  allowTouchMove: false,
  pagination: {
    el: '.products-item-swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.products-item-swiper-button-next',
    prevEl: '.products-item-swiper-button-prev'
  }
});
