function doWork() {
    var canvas = document.getElementById("myBonfireLitCanvas");
    var context = canvas.getContext("2d");

    var myImg = new Image();
    myImg.onload = function () {
        context.drawImage(myImg, 0, 0, 1270, 720);
        context.font = "72px OptimusPrinceps";
        context.fillStyle = "#f8c35b";
        context.textAlign = "center";
        context.fillText("FOLHA DE PONTO PREENCHIDA", canvas.width / 2, (canvas.height / 2) + 20);
    };
    myImg.src = 'img/bonfire_lit.jpg';
}

document.addEventListener("DOMContentLoaded", function (event) {
    doWork();
});
