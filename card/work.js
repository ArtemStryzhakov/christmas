
let flakeArr = []
let ctv;

function kustuta() {
    var t = document.getElementById("particle_canvas").getContext("2d");
    t.clearRect(0, 0, 500, 600); //x,y, laius,kõrgus
}

window.onload = load;

function load() {
    ctv = document.getElementById("snowCnv").getContext("2d")
}

function ground(){
    var canvas=document.getElementById('particle_canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle="white";
    ctx.strokeStyle="white";
    ctx.lineWidth = 5; // толщина линии
    ctx.beginPath();
    ctx.moveTo(0, 590); //передвигаем перо
    ctx.lineTo(0, 600); //рисуем линию
    ctx.lineTo(500, 600); //передвигаем перо
    ctx.lineTo(500, 580); //рисуем линию
    ctx.lineTo(200, 560);
    ctx.fill();
    ctx.stroke();
}

function stvol(){
    var canvas=document.getElementById('particle_canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle="brown";
    ctx.strokeStyle="brown";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 570);
    ctx.lineTo(250, 570);
    ctx.lineTo(250, 510);
    ctx.lineTo(200, 510);

    ctx.fill();
}

function tree(){
    stvol();
    var canvas=document.getElementById('particle_canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle="green";
    ctx.strokeStyle="green";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(110,540);
    ctx.lineTo(230,525);
    ctx.lineTo(370,540);
    ctx.lineTo(270,420);
    ctx.lineTo(345,440);
    ctx.lineTo(255,300);
    ctx.lineTo(310,320);
    ctx.lineTo(230,210);
    ctx.lineTo(150,320);
    ctx.lineTo(205,300);
    ctx.lineTo(120,440);
    ctx.lineTo(190,415);

    ctx.fill();
}

function decoration(){
    var canvas=document.getElementById('particle_canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle="orange";
    ctx.strokeStyle="orange";
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(130, 510);
    ctx.lineTo(305, 460);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.strokeStyle="red";
    ctx.lineWidth = 4;

    ctx.moveTo(320, 432);
    ctx.lineTo(230, 380);
    ctx.lineTo(180, 340);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle="purple";
    ctx.strokeStyle="purple";
    ctx.lineWidth = 4;

    ctx.moveTo(290, 290);
    ctx.lineTo(200, 250);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle="yellow";
    ctx.strokeStyle="yellow";
    ctx.lineWidth = 4;

    ctx.moveTo(230, 215);
    ctx.lineTo(220, 190);
    ctx.lineTo(190, 180);
    ctx.lineTo(220, 170);
    ctx.lineTo(230, 145);
    ctx.lineTo(240, 170);
    ctx.lineTo(270, 180);
    ctx.lineTo(240, 190);
    ctx.lineTo(230, 215);
    ctx.stroke();
    ctx.fill();
}

function drawAll(){
    ground();
    tree();
    decoration();
    snow();
}

function snow() {
    for (let i = 0; i < 50; i++) {
        flakeArr[i] = ({
            X: Math.random()* 500,
            Y: Math.random()* 500,
            R: Math.random()* 5 + 2});
    }
    setInterval(drawSnowflake, 10)
}

function drawSnowflake() {
    ctv.beginPath()
    ctv.clearRect(0, 0, 500, 600)
    ctv.fillStyle = "#fff"
    for (let i=0; i<flakeArr.length;i++){
        let flake = flakeArr[i]
        ctv.moveTo(flake.X, flake.Y);
        ctv.arc(flake.X,flake.Y, flake.R, 0, 2*Math.PI)
        ctv.fill();
    }
    ctv.closePath();
    moveFlakes()
}

function moveFlakes() {
    for (let i = 0; i < flakeArr.length; i++) {
        let flake = flakeArr[i]
        flake.Y += 1;
        flake.X += Math.sin(0.01)*2;
        if (flake.Y > 600){
            flake.Y = 0;
            flake.X = Math.random() * 600
        }
    }
}
