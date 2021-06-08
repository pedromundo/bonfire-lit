let memeText = "FOLHA DE PONTO PREENCHIDA";
let optimusPrinceps = new FontFace('Optimus Princeps', 'url(font/OptimusPrinceps.ttf)');

function setUpApp() {
    let canvas = document.getElementById("myBonfireLitCanvas");
    let context = canvas.getContext("2d");

    let myImg = new Image();
    myImg.onload = function () {
        context.drawImage(myImg, 0, 0, 1280, 720);
        context.font = '72px "Optimus Princeps"';
        context.fillStyle = "#f8c35b";
        context.textAlign = "center";
        context.fillText(memeText, canvas.width / 2, (canvas.height / 2) + 25);
    };
    myImg.src = 'img/bonfire_lit.jpg';
}

document.addEventListener("DOMContentLoaded", function (event) {
    optimusPrinceps.load().then(function (loadedFont) {
        document.fonts.add(loadedFont);
        setUpApp();
    });

    const btnUpdate = document.getElementById("btnUpdate");
    const txtText = document.getElementById("txtText");

    btnUpdate.onclick = function () {
        memeText = txtText.value;
        setUpApp();
    };
});
