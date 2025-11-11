import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../sass/style.scss";

const burger = document.querySelector(".burger"),
	close = document.querySelector(".header__menu-close"),
	menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
	menu.classList.add("header__menu_active");
	document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
	menu.classList.remove("header__menu_active");
	document.body.style.overflow = "";
});

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
