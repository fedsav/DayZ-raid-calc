let faqOpen = document.querySelector(".header_btn");
let faqClose = document.querySelector(".modal_close");
let modal = document.querySelector(".modal");
let wrapper = document.querySelector(".wrapper")

faqOpen.addEventListener("click", (event) => {
    modal.style.display = "flex";
    
})

faqClose.addEventListener("click", (event) => { 
    modal.style.display = "none";
})