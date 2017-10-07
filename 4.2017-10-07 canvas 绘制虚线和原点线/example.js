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
  // ctx.setLineDash([25, 5])
  // ctx.lineWidth = 4
  // ctx.strokeStyle = '#F36';

  // ctx.beginPath()
  // ctx.moveTo(10, 100);
  // ctx.lineTo(400, 100);
  // ctx.stroke()

  
  // ctx.lineWidth = 4;

  // ctx.beginPath()
  // ctx.setLineDash([40, 30, 20])
  // ctx.strokeStyle = '#F36';
  // ctx.moveTo(10, 100);
  // ctx.lineTo(400, 100);
  // ctx.stroke();


  // ctx.beginPath()
  // ctx.setLineDash([40, 30, 20, 10])
  // ctx.strokeStyle = 'blue';
  // ctx.moveTo(10, 120);
  // ctx.lineTo(400, 120);
  // ctx.stroke();

  // ctx.beginPath()
  // ctx.setLineDash([10])
  // ctx.strokeStyle = 'pink';
  // ctx.moveTo(10, 150);
  // ctx.lineTo(400, 150);
  // ctx.stroke();
  ctx.dottedLine(10, 100, 200, 200);
  ctx.dottedLine(10, 100, 200, 200);
  ctx.dottedLine(10, 100, 200, 200);
  ctx.dottedLine(10, 100, 200, 200);
}