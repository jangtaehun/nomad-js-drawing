const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

//ctx.fillRect(50, 50, 100, 200); //x, y, w, h

/*
ctx.rect(50, 50, 100, 100)
ctx.rect(150, 150, 100, 100)
ctx.rect(250, 250, 100, 100)
ctx.stroke() // 선만 있다.
ctx.fill() //색을 채운다
*/

/*
ctx.beginPath(); //새 경로를 만든다. 이전 경로와 분리
ctx.rect(350, 350, 100, 100)
ctx.rect(450, 450, 100, 100)
ctx.fillStyle = "red";
ctx.fill()
setTimeout(() => {ctx.fill();}, 5000)
*/

/*
ctx.beginPath();
ctx.moveTo(750, 750)
ctx.lineTo(650, 750)
ctx.lineTo(650, 650)
ctx.lineTo(750, 650)
ctx.lineTo(750, 750)
ctx.stroke()
ctx.fillStyle = "blue";
ctx.fill()
*/

/*
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2; 
ctx.strokeRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200)
ctx.lineTo(325, 150)
ctx.lineTo(450, 200)
ctx.fill() 
*/

ctx.fillRect(200 + 10, 200, 14, 100)
ctx.fillRect(400 - 10, 200, 14, 100)
ctx.fillRect(275, 200, 60, 200)

ctx.arc(304, 140, 60, 0, 2 * Math.PI);
ctx.fill()
ctx.beginPath();
ctx.fillStyle = "red"
ctx.arc(270, 140, 10, 0, 2 * Math.PI);
ctx.arc(335, 140, 10, Math.PI, 2 * Math.PI);
ctx.fill()
