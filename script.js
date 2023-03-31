const imageContainer = document.querySelector(".image_container");
const imageLength = document.querySelectorAll(".image").length;
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let imageIndex = 0;
let timerId;

const autoScroll = () => {
    timerId = setInterval(() => {
        nextBtn.click();
    }, 3000);
}

nextBtn.addEventListener("click", () => {
    imageIndex += 1;
    if(imageIndex > imageLength - 1){
        imageIndex = 0;
    }
    return update();
});
prevBtn.addEventListener("click", () => {
    imageIndex -= 1;
    if(imageIndex < 0){
        imageIndex = imageLength - 1;
    }
    return update();
});

const update = () => {
    imageContainer.style.transform = `translateX(${-400 * imageIndex}px)`;
    if(timerId){clearInterval(timerId)}
    return autoScroll();
}

autoScroll()