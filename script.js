/* Declare variables below to save the different sections (divs) of your story*/
let uno = document.querySelector(".image1");
let three = document.querySelector(".title");
let bento = document.querySelector(".option-one");
let pepper = document.querySelector(".option-two");
let yeslunch = document.querySelector(".option-three");
let nolunch = document.querySelector(".option-four");
let careful = document.querySelector(".option-five");
let careless = document.querySelector(".option-six");
let screen1 = document.querySelector(".option-one-screen");
let screen2 = document.querySelector(".option-two-screen");
let end1 = document.querySelector(".option-one-end");
let end2 = document.querySelector(".option-two-end");
let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");






bento.onclick = function() {
    screen1.style.display = "block";
    bento.style.display = "none";

    title.innerHTML = " Secret Stalker: You definitely done for...";

};
pepper.onclick = function() {
    screen1.style.display = "block";
    bento.style.display = "none";
    title.innerHTML = "Secret Stalker: Safe for now...";
};
yeslunch.onclick = function() {
    screen2.style.display = "block";


};
nolunch.onclick = function() {
    screen2.style.display = "block";
};
careful.onclick = function() {
    end1.style.display = "block";
};
careless.onclick = function() {
    end2.style.display = "block";
};
bento.onmouseover = function() {
    bento.style.width = "250px";
    bento.style.height = "150px";
};

pepper.onmouseover = function() {
    pepper.style.width = "250px";
    pepper.style.height = "150px";
};

yeslunch.onmouseover = function() {
    yeslunch.style.width = "250px";
    yeslunch.style.height = "150px";

};

nolunch.onmouseover = function() {
    nolunch.style.width = "250px";
    nolunch.style.height = "150px";
};

careful.onmouseover = function() {
    careful.style.width = "250px";
    careful.style.height = "150px";
};

careless.onmouseover = function() {
    careless.style.width = "250px";
    careless.style.height = "150px";
};