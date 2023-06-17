document.addEventListener("DOMContentLoaded", function() {
    const testimonialSlider = document.querySelector(".testimonial-slider");
  
    if (testimonialSlider) {
      const slidesToShow = 4;
      const slidesToScroll = 1;
      const breakpoint1200 = 3;
      const breakpoint992 = 2;
      const breakpoint580 = 1;
  
      const slickOptions = {
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
      };
  
      function setSlidesToShow() {
        const windowWidth = window.innerWidth;
  
        if (windowWidth < 1200) {
          slickOptions.slidesToShow = breakpoint1200;
        }
  
        if (windowWidth < 992) {
          slickOptions.slidesToShow = breakpoint992;
        }
  
        if (windowWidth < 580) {
          slickOptions.slidesToShow = breakpoint580;
        }
      }
  
      function initializeSlider() {
        setSlidesToShow();
  
        if (typeof slickOptions.slidesToShow === "number") {
          testimonialSlider.classList.add("initialized");
          testimonialSlider.style.opacity = "1";
          testimonialSlider.style.visibility = "visible";
  
          // Initialize the slider
          // Replace this line with your own slider initialization code
          console.log("Slider initialized with options:", slickOptions);
        }
      }
  
      initializeSlider();
  
      window.addEventListener("resize", initializeSlider);
    }
  });
  