const slider = document.querySelectorAll(".pic1");
var count = 0;
slider.forEach(
    (pic1, index)=>{
        pic1.style.left=`${index*100}%`;
    }
)
const prev = ()=>{
    count--;
    slideImage();
}
const next = ()=>{
    count++;
    slideImage();
}
const slideImage = ()=>{
    slider.forEach(
        pic1.style.transform=`translateX(-${count*100}%)`
    )
}