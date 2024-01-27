const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.lineWidth = 2;
// ctx.moveTo(200, 200); //이동
// ctx.lineTo(400, 400); //선을 긋는다

// 선 색 변경
// ctx.strokeStyle = "blue";
// ctx.stroke(); //그린다

// 채운다.
// ctx.fillStyle = "red";
// ctx.fill();

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

const lineWidth = document.getElementById("line-width");
ctx.lineWidth = lineWidth.value; //초기 값을 준다.

const color = document.getElementById("color");
ctx.strokeStyle = color.value;

const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);

const modeBtn = document.getElementById("mode-btn");

const clean = document.getElementById("clean-btn");

const eraser = document.getElementById("eraser-btn");

let isPainting = false;
let isFilling = false;

canvas.addEventListener("mousemove", onMove);
function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
function onMouseDown(event) {
    isPainting = true;
}
function onMouseUp(event) {
    isPainting = false;
}

canvas.addEventListener("mouseleave", cancelPainting);
function cancelPainting(event) {
    isPainting = false;
}

lineWidth.addEventListener("change", onLineWidthChange);
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
    console.log(event.target.value);
}

color.addEventListener("change", onColorChange);
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.fillStyle = colorValue;
    ctx.strokeStyle = colorValue;
    color.value = colorValue;
}
function onModeClick(event) {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

canvas.addEventListener("click", onCanvasClick);
function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

clean.addEventListener("click", onCleanClick);
function onCleanClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fill();
}

eraser.addEventListener("click", onEraserClick);
function onEraserClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
}
