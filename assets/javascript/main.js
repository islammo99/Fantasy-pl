let bars = document.querySelector(".bars")
let navs = document.querySelector(".nav-items")

bars.addEventListener("click", ()=>{
    if(navs.clientHeight == 0){
        navs.style.height = `${navs.scrollHeight}px`
    
    }else{
        navs.style.height = "";
    }
})

// ============================
let accordionBtns = document.querySelectorAll (".accordionBtn");
let accordionBody = document.querySelectorAll (".accordion-body");
let accordionIcon = document.querySelectorAll (".accordionBtn i");

for (let i = 0; i < accordionBtns.length; i++){
    accordionBtns[i].addEventListener("click", () => {
        for(let j = 0; j < accordionBtns.length; j++){
            if(i == j){
                if(accordionBody[i].clientHeight == 0) {
                    accordionBody[i].style.height = `${accordionBody[i].scrollHeight}px`;
                    accordionIcon[i].style.transform = "rotate(180deg)";
                }else {
                    accordionBody[i].style.height = ``;
                    accordionIcon[i].style.transform = "";
                }
            }else {
                accordionBody[j].style.height = ``;
                                accordionIcon[j].style.transform = "";
            }
        }
        
    });
}