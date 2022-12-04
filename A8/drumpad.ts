var text: string;
var eins: HTMLAudioElement = new Audio('./audio/snare-mp3');
var zwei: HTMLAudioElement = new Audio('./audio/hihat.mp3');
var drei: HTMLAudioElement = new Audio('./audio/kick.mp3');
var vier: HTMLAudioElement = new Audio('./audio/A.mp3');
var fuenf: HTMLAudioElement = new Audio('./audio/C.mp3');
var sechs: HTMLAudioElement = new Audio('./audio/F.mp3');
var sieben: HTMLAudioElement = new Audio('./audio/G.mp3');
var acht: HTMLAudioElement = new Audio('./audio/laugh-1.mp3');
var neun: HTMLAudioElement = new Audio('./audio/laugh-2.mp3');


function test (text, eins) :void{
    eins.play();
}
document.querySelector("#one").addEventListener('click', function () {
    test("1", eins);
});
document.querySelector("#two").addEventListener('click', function () {
    test("2", zwei);
});
document.querySelector("#three").addEventListener('click', function () {
    test("3", drei);
});

document.querySelector("#four").addEventListener('click', function () {
    test("4", vier);
});
document.querySelector("#five").addEventListener('click', function () {
    test("5", fuenf);
});
document.querySelector("#six").addEventListener('click', function () {
    test("6", sechs);
});

document.querySelector("#seven").addEventListener('click', function () {
    test("7", sieben);
});
document.querySelector("#eight").addEventListener('click', function () {
    test("8", acht);
});
document.querySelector("#nine").addEventListener('click', function () {
    test("9", neun);
});
