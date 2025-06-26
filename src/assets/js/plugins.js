// src/assets/js/plugins.js
import Swiper from 'swiper';
import 'swiper/css';

// 初始化 Swiper
document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.swiper-container', {
    // Swiper 配置
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});