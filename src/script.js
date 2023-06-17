const hamburger = document.querySelector(".hamBurger");
const navigationMenu = document.querySelector(".nav__list");
const navigationItems = document.getElementsByClassName("collapse");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active")
});

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navigationMenu.classList.remove("active");
}));

function isDisplayBlock(items) {
    return items.style.display === "block" ? items.style.display = "none" : items.style.display = "block";
}

function collapseNavigationItems(){
    for(let j=0; j<navigationItems.length; j++){
        navigationItems[j].addEventListener("click", () => {
            const content = document.querySelector('.content');
            if(content.style.display === "none"){
                content.style.display = "block";
            } else{
                content.style.display = "none";
            }
        })
    }
}

function handleScreenChange(mediaQuery){
    if(mediaQuery.matches){
        collapseNavigationItems();
    }
}

const mediaQuery = window.matchMedia('(max-width: 745px)');
handleScreenChange(mediaQuery);
mediaQuery.addEventListener("change", function(event) {
    handleScreenChange(event.target)
})


