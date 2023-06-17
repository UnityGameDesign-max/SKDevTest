const hamburger = document.querySelector(".hamBurger");
const navigationMenu = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active")
});

document.querySelectorAll(".nav__item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navigationMenu.classList.remove("active");
}));

const isDisplayBlock = (items) => {
    return items.style.display === "block" ? items.style.display = "none" : items.style.display = "block";
}

const Collapsibles = (screenSize) => {
    let navigationItems = document.getElementsByClassName("collapse");
    if(screenSize.matches){
        for(let i=0; i<navigationItems.length; i++){
            navigationItems[i].addEventListener("click", function(){
                this.classList.toggle("collapse");
                let content = this.nextElementSibling;
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    }
}

let screenWidth = window.matchMedia("(max-width: 745px)");
Collapsibles(screenWidth);
screenWidth.addEventListener(Collapsibles);

const swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

