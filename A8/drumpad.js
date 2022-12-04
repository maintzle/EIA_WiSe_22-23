var text;
var eins = new Audio('./audio/snare-mp3');
var zwei = new Audio('./audio/hihat.mp3');
var drei = new Audio('./audio/kick.mp3');
var vier = new Audio('./audio/A.mp3');
var fuenf = new Audio('./audio/C.mp3');
var sechs = new Audio('./audio/F.mp3');
var sieben = new Audio('./audio/G.mp3');
var acht = new Audio('./audio/laugh-1.mp3');
var neun = new Audio('./audio/laugh-2.mp3');
function test(text, eins) {
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
//# sourceMappingURL=drumpad.js.map