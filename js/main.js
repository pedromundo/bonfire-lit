function doWork() {
    var canvas = document.getElementById("myBonfireLitCanvas");
    var context = canvas.getContext("2d");

    var myImg = new Image();
    myImg.onload = function () {
        context.drawImage(myImg, 0, 0, 1270, 720);
    };
    myImg.src = 'img/bonfire_lit.jpg';
}

document.addEventListener("DOMContentLoaded", function (event) {
    doWork();
});
