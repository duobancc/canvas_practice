const canvas = document.querySelector('canvas');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

// 填充颜色
ctx.fillStyle = 'rgba(255, 0, 0, .1)'

// ctx.fillRect(x, y , width, height)  相对画布得左上角，左上角 0，0
ctx.fillRect(100, 100, 50, 50);

// line
ctx.beginPath() // 开始绘制路径

// ctx.moveTo(x, y)

const xWidth = width - 200
const yHeight = height - 200



ctx.strokeStyle = 'pink'; //指定的颜色绘制矩形轮廓
ctx.moveTo(10, 10);
ctx.lineTo(xWidth, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, yHeight);
ctx.stroke();

// acr / Circle
// ctx.arc(x, y, 半径, 开始角度, 结束角度, 顺时针逆时针)

for (let i = 0; i < 10; i++) {
  const arcx = Math.random() * xWidth;
  const arcy = Math.random() * yHeight;
  ctx.beginPath()
  ctx.arc(arcx, arcy, 50, 50, 0, Math.PI * 2, true);
  ctx.strokeStyle = 'blue';
  ctx.stroke();
}




