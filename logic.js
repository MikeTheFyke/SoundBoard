var cowSound = new Audio();
var chickenSound = new Audio();
var pigSound = new Audio();
var sheepSound = new Audio();
var giraffeSound = new Audio();

cowSound.src = "./audio/Cow_Moo.mp3";
chickenSound.src = "./audio/Chicken_Sound.mp3";
pigSound.src = "./audio/Pig_Snort.mp3";
sheepSound.src = "./audio/Sheep_Sound.mp3";
giraffeSound.src = "./audio/Giraffe_Dying.mp3";

function cowAnimate () {
    document.getElementById("cowImg").src = "./images/RedButton.gif";
}

function chickenAnimate () {
    document.getElementById("chickenImg").src = "./images/BlueButton.gif";
}

function pigAnimate () {
    document.getElementById("pigImg").src = "./images/YellowButton.gif";
}

function sheepAnimate () {
    document.getElementById("sheepImg").src = "./images/GreenButton.gif";
}