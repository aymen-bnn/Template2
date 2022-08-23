

const fixedNav = document.querySelector(".header"); 

window.addEventListener("scroll" , (event) => {
    let scrollPosition = window.scrollY;
    if(scrollPosition > 200){
        fixedNav.style.backgroundColor = "#016681";
        fixedNav.style.position = "fixed";
    }else{
        fixedNav.style.backgroundColor = "unset";
        fixedNav.style.position = "absolute";
    }
})