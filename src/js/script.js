import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

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


try {
	const tabs = document.querySelectorAll(".catalog__tab");
	const contents = document.querySelectorAll(".catalog__content-item");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Удаляем активный класс у всех табов и контента
			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
			contents.forEach((c) => (c.style.display = "none"));

			// Добавляем активный класс к нажатому табу и показываем соответствующий контент
			tab.classList.add("catalog__tab_active");
			contents[index].style.display = "block";
		});
	});

	// Показываем первый контент при загрузке
	contents.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));
} catch (e) { }

try {
  const validator = new JustValidate('.git__form');
  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: "the name is entered incorrectly"
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "enter at least 2 characters",
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
      },
      {
        rule: 'email',
      }
    ])
    .addField('#question', [
      {
        rule: 'required'
      },
      {
        rule: 'minLength',
        value: 5,
      },
    ],
      {
        errorsContainer: document
          .querySelector("#question")
          .parentElement.querySelector(".errorMessage"),
      }  
  )
    .addField('#terms', [
      {
        rule: 'required'
      },

    ],
      {
				errorsContainer: document
					.querySelector("#terms")
					.parentElement.parentElement.querySelector(".errorMessage-checkbox"),
			}
  )
     
  .onSuccess((event) => {
			const form = event.currentTarget;
			const formData = new FormData(form);

			fetch("https://httpbin.org/post", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("Success", data);
					form.reset();
 		});
		});
  
} catch (e) { };

try {
  const validator_footer = new JustValidate('#footerForm');
    validator_footer
       .addField('#footer__email', [
      {
        rule: 'required',
      },
      {
        rule: 'email',
      }
       ],
         {
        errorsContainer: document
          .querySelector("#footerForm")
          .parentElement.querySelector(".errorMessage_footer"),
      }
    )
        .addField('#footer__terms', [
      {
        rule: 'required'
      },
        ])
        .onSuccess((event) => {
			const form = event.currentTarget;
			const formData = new FormData(form);

			fetch("https://httpbin.org/post", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("Success", data);
					form.reset();
 		});
		});
} catch (e) { };
