import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../sass/style.scss";

try {
      const swiper = new Swiper('.swiper', {
          pagination: {
          el: ".swiper-pagination",
          clickable: true,
            
          },
          navigation: {
              nextEl: ".icon-left-open ",
              prevEl: ".icon-right-open",
            },
          
          // Default parameters
          slidesPerView: 1,
          loop: true,
          breakpoints: {
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          // when window width is >= 1920px
          1920: {
          slidesPerView: 3,
          spaceBetween: 35,    
          }
          
        },
        modules: [Navigation, Pagination],  
      });
} catch (e) { };
