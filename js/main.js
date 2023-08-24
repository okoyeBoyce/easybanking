const navOpen = document.querySelector(".ri-menu-line")
const nav = document.querySelector("nav ul")
const navClose = document.querySelector(".ri-close-fill")

navOpen.addEventListener("click", ()=>{
    nav.style.top = "35%"
    navOpen.style.display = "none"
    navClose.style.display = "block"
})

navClose.addEventListener("click", ()=>{
    nav.style.top = "-35%"
    navOpen.style.display = "block"
    navClose.style.display = "none"
})