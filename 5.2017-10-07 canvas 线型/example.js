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
  // ctx.strokeStyle = 'red';
  // ctx.beginPath();
  // ctx.moveTo(30, 30);
  // ctx.lineTo(300, 30);
  // ctx.stroke()
  // ctx.closePath()

  // ctx.lineWidth = 40;
  // ctx.beginPath();
  // ctx.moveTo(30, 60);
  // ctx.lineTo(300, 60);
  // ctx.stroke();
  // ctx.closePath();

  // ctx.lineWidth = 40;
  // ctx.strokeStyle = 'pink';
  // ctx.beginPath();
  // ctx.lineCap = 'butt';
  // ctx.moveTo(30, 30);
  // ctx.lineTo(400, 30);
  // ctx.fillText('butt', 410, 40);
  // ctx.stroke()

  // ctx.beginPath();
  // ctx.lineCap ='round';
  // ctx.moveTo(30, 100);
  // ctx.lineTo(400, 100);
  // ctx.fillText('round', 430, 110);
  // ctx.stroke();

  // ctx.beginPath();
  // ctx.lineCap ='square';
  // ctx.moveTo(30, 180);
  // ctx.lineTo(400, 180);
  // ctx.fillText('square', 430, 190);
  // ctx.stroke();

  ctx.font = '24px Arial';
  ctx.strokeStyle = '#F9F';
  ctx.lineWidth = 30;
  ctx.beginPath();
  ctx.lineJoin = 'miter';
  ctx.moveTo(30, 50);
  ctx.lineTo(120, 50);
  ctx.lineTo(120, 180);
  ctx.fillText('miter', 40, 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineJoin = 'round';
  ctx.moveTo(180, 50);
  ctx.lineTo(280, 50);
  ctx.lineTo(280, 280);
  ctx.fillText('round', 200, 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineJoin = 'bevel';
  ctx.moveTo(350, 50);
  ctx.lineTo(450, 50);
  ctx.lineTo(450, 280);
  ctx.fillText('bevel', 370, 20);
  ctx.stroke();
}