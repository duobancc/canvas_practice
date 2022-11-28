const canvas = document.querySelector('canvas');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.fill()
  }

  update() {
    if (this.x + radius > width || this.x - radius < 0) {
      this.dx = -this.dx
    }
    this.x += this.dx

    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.y += this.dy

    this.draw()
  }
}

let circleArray = []
let radius = 30
const count = 10
const speedBase = 10

for (let i = 0; i < count; i++) {
  let arcX = Math.random() * (width - radius * 2) + radius;
  let arcY = Math.random() * (height - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * speedBase; // x速度
  let dy = (Math.random() - 0.5) * speedBase; // y速度
  circleArray.push(new Circle(arcX, arcY, dx, dy, radius))
}


function animate() {
  // 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
  //该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
  requestAnimationFrame(animate);
  // 清空画布
  ctx.clearRect(0, 0, width, height);

  circleArray.forEach(circle => {
    circle.update()
  })

}

animate();






