var Drumpad;
(function (Drumpad) {
    let isBeatPlaying = false;
    let beat = 0;
    document.querySelector("#playbutton").addEventListener("click", playBeat);
    document.querySelector("#remix").addEventListener("click", hndRemix);
    document.querySelector("#one").addEventListener("click", function () { playSample(0); });
    document.querySelector("#two").addEventListener("click", function () { playSample(1); });
    document.querySelector("#three").addEventListener("click", function () { playSample(2); });
    document.querySelector("#four").addEventListener("click", function () { playSample(3); });
    document.querySelector("#five").addEventListener("click", function () { playSample(4); });
    document.querySelector("#six").addEventListener("click", function () { playSample(5); });
    document.querySelector("#seven").addEventListener("click", function () { playSample(6); });
    document.querySelector("#eight").addEventListener("click", function () { playSample(7); });
    document.querySelector("#nein").addEventListener("click", function () { playSample(8); });
    let sounds = [
        new Audio("assets/hihat.mp3"),
        new Audio("assets/kick.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("./assets/A.mp3"),
        new Audio("assets/C.mp3"),
        new Audio("assets/F.mp3"),
        new Audio("assets/G.mp3"),
        new Audio("assets/laugh-1.mp3"),
        new Audio("assets/laugh-2.mp3")
    ];
    function playSample(_sound) {
        sounds[_sound].play();
    }
    function playBeat(_event) {
        if (!isBeatPlaying) {
            // start beat
            beat = setInterval(function () {
                for (let counter = 0; counter < sounds.length; counter++) {
                    playSample(counter);
                }
            }, 500);
            changeIcon();
        }
        else {
            clearInterval(beat);
            changeIcon();
        }
        isBeatPlaying = !isBeatPlaying;
    }
    function changeIcon() {
        let icon = document.querySelector("#playbutton");
        if (icon.classList.contains("fa-stop")) {
            document.querySelector("#playbutton").classList.remove("fa-stop");
            document.querySelector("#playbutton").classList.add("fa-play");
        }
        else {
            icon.classList.add("fa-stop");
            icon.classList.remove("fa-play");
        }
    }
    function hndRemix(_event) {
        if (isBeatPlaying) {
            playBeat();
        }
        beat = setInterval(playRemix, 150);
        changeIcon();
        isBeatPlaying = true;
    }
    function playRemix() {
        let rndSound = (Math.random() * 9);
        rndSound = Math.round(rndSound);
        playSample(rndSound);
    }
})(Drumpad || (Drumpad = {}));
//# sourceMappingURL=drumpad.js.map