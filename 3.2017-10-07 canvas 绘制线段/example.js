function canvasSupport(e) {
	return !!e.getContext;
}

function canvasApp () { 
	var myCanvas = document.getElementById('myCanvas'); 
	if (!canvasSupport(myCanvas)) { 
		return;
	}

	var ctx = myCanvas.getContext('2d'); 
	drawScreen(ctx)
}

function eventWindowLoaded() {
	canvasApp()
}

//开始绘制图形，以上函数是准备函数
function drawScreen(ctx) {
  // ctx.moveTo(50, 10);
  // ctx.lineTo(350, 100);
  // ctx.stroke();

  // ctx.lineWidth = 10;
  // ctx.strokeStyle = '#F36';
  // ctx.moveTo(50, 10);
  // ctx.lineTo(350, 100);
  // ctx.stroke()

  // 创建一个表示线性颜色渐变的CanvasGradient对象， 
  // 并设置该对象的作用区域就是线段所在的区域
  // var canvasGradient = ctx.createLinearGradient(50, 50, 250, 50);
  //在offset为0的位置(即起点位置)添加一个蓝色的渐变
  // canvasGradient.addColorStop(0, 'blue')
  //在offset为0.2的位置(线段左起20%的位置)添加一个绿色的渐变 
  // canvasGradient.addColorStop(0.2, "green"); 
  //在offset为0的位置(即终点位置)添加一个红色的渐变 
  // canvasGradient.addColorStop(1, "red");

  // ctx.strokeStyle = canvasGradient;
  // ctx.lineWidth = 10;
  // ctx.moveTo(50, 10);
  // ctx.lineTo(350, 100);
  // ctx.stroke()

  // ctx.strokeStyle = '#f36'; 
  // ctx.lineWidth = 4; 
  // ctx.beginPath(); 
  // ctx.moveTo(50, 10); 
  // ctx.lineTo(150, 10);
  // ctx.lineTo(150,200); 
  // ctx.lineTo(200,200); 
  // ctx.lineTo(200,150); 
  // ctx.stroke();
  // ctx.closePath();


  // ctx.strokeStyle = '#f36';
  // ctx.lineWidth   = 10;
  // ctx.beginPath();
  // ctx.moveTo(50, 10);
  // ctx.lineTo(150, 10);
  // ctx.lineTo(150, 200);
  // ctx.stroke();
  // ctx.closePath()

  // ctx.beginPath()
  // ctx.moveTo(200, 200);
  // ctx.lineTo(200, 150);
  // ctx.stroke();
  // ctx.closePath()

  ctx.strokeStyle = 'red'; 
  ctx.lineWidth = 1; 
  ctx.beginPath(); 
  ctx.moveTo(50, 50); 
  ctx.lineTo(350, 50); 
  ctx.stroke(); 
  
  ctx.beginPath();
  ctx.moveTo(50.5, 100.5); 
  ctx.lineTo(350.5,100.5); 
  ctx.closePath(); 
  ctx.stroke();
}