const canvas = document.querySelector('canvas');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

const mouse = {
  x: undefined,
  y: undefined,
}


const maxRadius = 40

const colorArray = [
  '#151F30',
  '#103778',
  '#0593A2',
  '#FF7A48',
  '#E3371E',
]

let circleArray = []
const count = 300
const speedBase = 4

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
  }



  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }

  update() {
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    this.x += this.dx

    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.y += this.dy

    // 鼠标交互
    // console.log('鼠标x', mouse.x, '圆形x', this.x)
    if (mouse.x - this.x < 50 && mouse.x - this.x > - 50 &&
      mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw()
  }
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

function init() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  circleArray = [];
  for (let i = 0; i < count; i++) {
    let radius = Math.random() * 3 + 1;
    let arcX = Math.random() * (width - radius * 2) + radius;
    let arcY = Math.random() * (height - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * speedBase; // x速度
    let dy = (Math.random() - 0.5) * speedBase; // y速度
    circleArray.push(new Circle(arcX, arcY, dx, dy, radius))
  }
  
}

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', () => {
  init()
})


animate();
init()





