var A07;
(function (A07) {
    const euGesamt = 446800000;
    document.querySelector(".poland").addEventListener("click", zeigePolen);
    document.querySelector(".netherlands").addEventListener("click", zeigeNiederlande);
    document.querySelector(".luxembourg").addEventListener("click", zeigeLuxemburg);
    const textTitle = "Einwohnerzahl in ";
    const textEins = "Gesamtzahl Einwohnerinnen und Einwohner in ";
    const textZwei = " in 2022";
    const balken = document.querySelector(".chart");
    function zeigePolen() {
        let land = "Polen";
        let titel = document.getElementById("Titel");
        titel.innerText = textTitle + land;
        let gesamt = document.querySelector(".Gesamteinwohner");
        gesamt.querySelector("h2").innerText = (bevölkerungsdichtePolen2022 / 1000000).toFixed(1) + "Mio";
        gesamt.querySelector("p").innerText = textEins + land + textZwei;
        let relativ = document.querySelector(".Relativ").querySelector("h2");
        relativ.innerText = Number(100 / euGesamt * bevölkerungsdichtePolen2022).toFixed(1) + "%";
        let wachstum = document.querySelector(".Wachstum08").querySelector("h2");
        wachstum.innerText = (100 / bevölkerungsdichtePolen2022 * summePolen).toFixed(1) + "%";
        let wachstumsrate = document.querySelector(".Wachstumsrate").querySelector("h2");
        wachstumsrate.innerText = (summePolen / 1000000).toFixed(1) + "Mio";
        balken.style.height = wachstum.innerText;
    }
    function zeigeMalta() {
        let land = "Malta";
        let titel = document.getElementById("Titel");
        titel.innerText = textTitle + land;
        let gesamt = document.querySelector(".Gesamteinwohner");
        gesamt.querySelector("h2").innerText = (bevölkerungsdichtePolen2022 / 1000000).toFixed(1) + "Mio";
        gesamt.querySelector("p").innerText = textEins + land + textZwei;
        let relativ = document.querySelector(".Relativ").querySelector("h2");
        relativ.innerText = Number(100 / euGesamt * bevölkerungsdichtePolen2022).toFixed(1) + "%";
        let wachstum = document.querySelector(".Wachstum08").querySelector("h2");
        wachstum.innerText = (100 / bevölkerungsdichtePolen2022 * summePolen).toFixed(1) + "%";
        let wachstumsrate = document.querySelector(".Wachstumsrate").querySelector("h2");
        wachstumsrate.innerText = (summePolen / 1000000).toFixed(1) + "Mio";
        balken.style.height = wachstum.innerText;
    }
    function zeigeNiederlande() {
        let land = "Niederlande";
        let titel = document.getElementById("Titel");
        titel.innerText = textTitle + land;
        let gesamt = document.querySelector(".Gesamteinwohner");
        gesamt.querySelector("h2").innerText = (bevölkerungsdichteNiederlande2022 / 1000000).toFixed(1) + "Mio";
        gesamt.querySelector("p").innerText = textEins + land + textZwei;
        let relativ = document.querySelector(".Relativ").querySelector("h2");
        relativ.innerText = Number(100 / euGesamt * bevölkerungsdichteNiederlande2022).toFixed(1) + "%";
        let wachstum = document.querySelector(".Wachstum08").querySelector("h2");
        wachstum.innerText = (100 / bevölkerungsdichteNiederlande2022 * summeNiederlande).toFixed(1) + "%";
        let wachstumsrate = document.querySelector(".Wachstumsrate").querySelector("h2");
        wachstumsrate.innerText = (summeNiederlande / 1000000).toFixed(1) + "Mio";
        balken.style.height = wachstum.innerText;
    }
    function zeigeLuxemburg() {
        let land = "Luxemburg";
        let titel = document.getElementById("Titel");
        titel.innerText = textTitle + land;
        let gesamt = document.querySelector(".Gesamteinwohner");
        gesamt.querySelector("h2").innerText = (bevölkerungsdichteLuxemburg2022 / 1000000).toFixed(1) + "Mio";
        gesamt.querySelector("p").innerText = textEins + land + textZwei;
        let relativ = document.querySelector(".Relativ").querySelector("h2");
        relativ.innerText = Number(100 / euGesamt * bevölkerungsdichteLuxemburg2022).toFixed(1) + "%";
        let wachstum = document.querySelector(".Wachstum08").querySelector("h2");
        wachstum.innerText = (100 / bevölkerungsdichteLuxemburg2022 * summeLuxemburg).toFixed(1) + "%";
        let wachstumsrate = document.querySelector(".Wachstumsrate").querySelector("h2");
        wachstumsrate.innerText = (summeLuxemburg / 1000000).toFixed(1) + "Mio";
        balken.style.height = wachstum.innerText;
    }
    console.log("Polen");
    const bevölkerungsdichtePolen2022 = 38179800;
    const peterine = "uggu";
    console.log("Einwohnerzahl: " + bevölkerungsdichtePolen2022);
    const bevölkerungsdichtePolen1960 = 29640000;
    const summePolen = bevölkerungsdichtePolen2022 - bevölkerungsdichtePolen1960;
    console.log(summePolen);
    const prozentPolen = bevölkerungsdichtePolen1960 / 100;
    console.log(prozentPolen);
    const prozentergebnisPolen = bevölkerungsdichtePolen2022 / prozentPolen;
    console.log(prozentergebnisPolen);
    console.log("Malta");
    const bevölkerungsdichteMalta2022 = 516869;
    const kathrin = "uggu";
    console.log("Einwohnerzahl Malta: " + bevölkerungsdichteMalta2022);
    const bevölkerungsdichteMalta1960 = 326550;
    const summeMalta = bevölkerungsdichteMalta2022 - bevölkerungsdichteMalta1960;
    console.log(summeMalta);
    const prozentMalta = bevölkerungsdichteMalta1960 / 100;
    console.log(prozentMalta);
    const prozentergebnisMalta = bevölkerungsdichteMalta2022 / prozentMalta;
    console.log(prozentergebnisMalta);
    console.log("Niederlande");
    const bevölkerungsdichteNiederlande2022 = 17530000;
    const ernst = "uggu";
    console.log("Einwohnerzahl Niederlande: " + bevölkerungsdichteNiederlande2022);
    const bevölkerungsdichteNiederlande1960 = 11490000;
    const summeNiederlande = bevölkerungsdichteNiederlande2022 - bevölkerungsdichteNiederlande1960;
    console.log(summeNiederlande);
    const prozentNiederlande = bevölkerungsdichteNiederlande1960 / 100;
    console.log(prozentNiederlande);
    const prozentergebnisNiederlande = bevölkerungsdichteNiederlande2022 / prozentNiederlande;
    console.log(prozentergebnisNiederlande);
    console.log("Luxemburg");
    const bevölkerungsdichteLuxemburg2022 = 639070;
    const eduard = "uggu";
    console.log("Einwohnerzahl Luxemburg: " + bevölkerungsdichteLuxemburg2022);
    const bevölkerungsdichteLuxemburg1960 = 313970;
    const summeLuxemburg = bevölkerungsdichteLuxemburg2022 - bevölkerungsdichteLuxemburg1960;
    console.log(summeLuxemburg);
    const prozentLuxemburg = bevölkerungsdichteLuxemburg1960 / 100;
    console.log(prozentLuxemburg);
    const prozentergebnisLuxemburg = bevölkerungsdichteLuxemburg2022 / prozentLuxemburg;
    console.log(prozentergebnisLuxemburg);
})(A07 || (A07 = {}));
//# sourceMappingURL=script.js.map