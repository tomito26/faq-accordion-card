const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow)=>{
    arrow.addEventListener("click",()=>{
        const itemInfo = document.querySelector(".item-moreInfo")
        alert(itemInfo)
    })
})