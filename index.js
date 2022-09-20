let sldImg1 = document.getElementById("sld-img1")
let sldImg2 = document.getElementById("sld-img2")
let sldImg3 = document.getElementById("sld-img3")

let i = 0;
let j = 1;
let k = 2;
let images = [];
let time = 1500;

images[0] = "/assets/card-1.png";
images[1] = "/assets/card-2.png";
images[2] = "/assets/card-3.png";

changeImg=()=>{
    sldImg1.src = images[i]

    if(i < images.length-1){
        i++;
    }
    else{
        i=0;
    }
}
changeImg2=()=>{
    sldImg2.src = images[j]

    if(j < images.length-1){
        j++;
    }
    else{
        j=0;
    }
}
changeImg3=()=>{
    sldImg3.src = images[k]

    if(k < images.length-1){
        k++;
    }
    else{
        k=0;
    }
}

setInterval(() => {
    changeImg()
}, time);
setInterval(() => {
    changeImg2()
}, time);
setInterval(() => {
    changeImg3()
}, time);


