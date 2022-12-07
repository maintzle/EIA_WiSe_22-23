const sounds = [
    new Audio("assets/hihat.mp3"),
    new Audio("assets/kick.mp3"),
    new Audio("assets/snare.mp3"),
    new Audio("assets/A.mp3"),
    new Audio("assets/C.mp3"),
    new Audio("assets/F.mp3"),
    new Audio("assets/G.mp3"),
    new Audio("assets/laugh-1.mp3"),
    new Audio("assets/laugh-2.mp3")
];
function playSample(sound) {
    sound.play();
}
document.querySelector("#1").addEventListener("click", function () { playSample(sounds[0]); });
document.querySelector("#2").addEventListener("click", function () { playSample(sounds[1]); });
document.querySelector("#3").addEventListener("click", function () { playSample(sounds[2]); });
document.querySelector("#4").addEventListener("click", function () { playSample(sounds[3]); });
document.querySelector("#5").addEventListener("click", function () { playSample(sounds[4]); });
document.querySelector("#6").addEventListener("click", function () { playSample(sounds[5]); });
document.querySelector("#7").addEventListener("click", function () { playSample(sounds[6]); });
document.querySelector("#8").addEventListener("click", function () { playSample(sounds[7]); });
document.querySelector("#9").addEventListener("click", function () { playSample(sounds[8]); });
function playBeat() {
    setInterval(function () {
        for (let counter = 0; counter < sounds.length; counter++) {
            sounds[counter].play();
        }
    }, 500);
}
document.querySelector("#playbutton").addEventListener("click", function () { playBeat(); });
//# sourceMappingURL=drumpad.js.map