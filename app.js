const sliders = document.querySelectorAll('.slider');
let activeImages = Array(sliders.length).fill(0);

function slideSuivante(sliderNumber){
    console.log(sliders)
    console.log(sliderNumber)
    console.log(activeImages)
    const slider = sliders[sliderNumber];
    const images = slider.children;
    console.log(images)
    const nbItems = images.length;
    images[activeImages[sliderNumber]].classList.remove('active')
    if(activeImages[sliderNumber] < nbItems - 1){
        activeImages[sliderNumber]++;
    } else {
        activeImages[sliderNumber] = 0;
    }
    images[activeImages[sliderNumber]].classList.add('active')
}


function slidePrecedente(sliderNumber){
    const slider = sliders[sliderNumber];
    const images = slider.children;
    const nbItems = images.length;
    const oldNumber = activeImages[sliderNumber]
    if(0 < activeImages[sliderNumber]){
        activeImages[sliderNumber]--;
    } else {
        activeImages[sliderNumber] = nbItems - 1
    }
    images[oldNumber].classList.remove('active')
    images[activeImages[sliderNumber]].classList.add('active')
}

function keyPress(e){
    console.log(e);

    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
