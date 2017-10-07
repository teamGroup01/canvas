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
  // var arc = {
  // 	x: myCanvas.width / 2,
  // 	y: myCanvas.height / 2,
  // 	r: 10
  // },
  // w = myCanvas.width,
  // h = myCanvas.height;

  // ctx.save();
  // ctx.lineWidth = 1;
  // ctx.strokeStyle = '#e3f';

  // for(var i=0; i<10;i++){
  // 	ctx.beginPath();
  // 	ctx.arc(arc.x, arc.y, arc.r * i, getRads(-45), getRads(45))
  // 	ctx.stroke();

  // 	ctx.beginPath();
  // 	ctx.arc(arc.x, arc.y, arc.r * i, getRads(-135), getRads(135), true)
  // 	ctx.stroke()
  // }

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#f36';
  ctx.fillStyle = 'red';

  ctx.fillRect(100 - 4, 50 - 4, 8, 8);
  ctx.fillRect(100 - 4, 200 - 4, 8, 8);
  ctx.fillRect(300 - 4, 200 - 4, 8, 8);

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(100, 200);
  ctx.lineTo(300, 200);
  ctx.stroke()

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(100, 200);
  ctx.lineTo(300, 200);
  ctx.stroke();

  setTimeout(function() {
	  ctx.beginPath();
	  ctx.strokeStyle = 'blue';
	  ctx.moveTo(100, 50);
	  ctx.arcTo(100, 200, 300, 200, 80);
	  ctx.stroke()
	}, 2000)

}

function getRads(degrees) {
	return (Math.PI * degrees) / 180;
}