document.addEventListener("DOMContentLoaded", function (event) {

  const barmenu = document.querySelector(".header__barmenu"),
    nav = document.querySelector(".nav");

    barmenu.addEventListener("click", function(event) { /*по клику срабатывает функция с event-информация о клике*/
      event.preventDefault(); /* чтобы стандартные/случайные значения/нажатия не срабатывали*/
      if (barmenu.classList.contains("header__barmenu--active")) { /* classList - массив с классами, который содержится в объекте*/
        barmenu.classList.remove("header__barmenu--active");
        nav.classList.remove("nav--active");
      }
      else {
        barmenu.classList.add("header__barmenu--active");
        nav.classList.add("nav--active");
      }
    });
    
    

    const portfolioSwiper = new Swiper('.portfolio__slider', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 475px
          475: {
            slidesPerView: 2,
          },
          // when window width is >= 680px
          680: {
            slidesPerView: 3,
          }
        }
      })

    
});