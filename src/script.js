const hamburger = document.querySelector(".hamBurger");
const navigationMenu = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active")
});

document.querySelectorAll(".nav__item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navigationMenu.classList.remove("active");
}))