var cowSound = new Audio();


cowSound.src = "./audio/Cow_Moo.mp3";

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