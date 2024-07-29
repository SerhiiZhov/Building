const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    noSwiping: true,
    noSwipingClass: 'noswip',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn__left',
      prevEl: '.swiper-btn__right',
    },
  });
const swiper2 = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">'  + "</span>";
      },
    },
    noSwiping: true,
    noSwipingClass: 'noswip',
  
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-nav__rightbtn',
      prevEl: '.swiper-nav__leftbtn',
    },
  });
const swiper3 = new Swiper('.swiper-3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">'  + "</span>";
      },
    },
    noSwiping: true,
    noSwipingClass: 'noswip',
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-nav__rightbtn',
      prevEl: '.swiper-nav__leftbtn',
    },
  });
const swiper4 = new Swiper('.swiper-4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">'  + "</span>";
      },
    },
    noSwiping: true,
    noSwipingClass: 'noswip',
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-nav__rightbtn',
      prevEl: '.swiper-nav__leftbtn',
    },
  });
const swiper5 = new Swiper('.swiper-5', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">'  + "</span>";
      },
    },
    noSwiping: true,
    noSwipingClass: 'noswip',
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-nav__rightbtn',
      prevEl: '.swiper-nav__leftbtn',
    },
  });

