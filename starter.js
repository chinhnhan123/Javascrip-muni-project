window.addEventListener("load", function() {
const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const nextBtn = document.querySelector(".slider-next");
const prevBtn = document.querySelector(".slider-prev");
const dotItems = document.querySelectorAll(".slider-dot-item");
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderItemLength = sliderItems.length;
let positionX = 0;
let index = 0;
nextBtn.addEventListener("click", function() {
    handleChangeSlider(1);
});
prevBtn.addEventListener("click", function() {
    handleChangeSlider(-1);

});
[...dotItems].forEach(item => item.addEventListener("click", function(e){
    [...dotItems].forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    const slideindex = parseInt(e.target.dataset.index)
    positionX = -slideindex*sliderItemWidth;
    index = slideindex;
    sliderMain.style = `transform: translateX(${positionX}px)` ;
}));
function handleChangeSlider(direction) {
    if (direction === 1){
        index ++;
        positionX = positionX - sliderItemWidth;
        console.log("🚀 ~ file: starter.js ~ line 24 ~ handleChangeSlider ~ positionX", positionX)
        if(positionX > 0){
            sliderMain.style = `transform: translateX(${positionX - (sliderItemWidth*sliderItemLength)}px)` ; }
        if(positionX <= 0){
            sliderMain.style = `transform: translateX(${positionX}px)` ;  }
                
        
        if(index >= sliderItemLength ){
            positionX = 0;
            index = 0;
            sliderMain.style = `  transition: transform 0s linear          ` ; 
        }
        console.log("🚀 ~ file: starter.js ~ line 12 ~ window.addEventListener ~ index", index)
 
    } else if (direction === -1){
        index --;
        positionX = positionX + sliderItemWidth;
        console.log("🚀 ~ file: starter.js ~ line 36 ~ handleChangeSlider ~ positionX", positionX)
        if(index <= -sliderItemLength){
            positionX = 0;
            index = 0;
            sliderMain.style = `  transition: transform 0s linear  ` ; 
        }
        if(positionX > 0){
        sliderMain.style = `transform: translateX(${positionX - (sliderItemWidth*sliderItemLength)}px)` ; }
        if(positionX <= 0){
            sliderMain.style = `transform: translateX(${positionX}px)` ;  }
    }
    [...dotItems].forEach((el) => el.classList.remove("active"));
    [...dotItems][index].classList.add("active");
}
})