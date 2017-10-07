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
	// 横线与竖线的是距 
	var dx = 50; 
	var dy = 50; 
	// 初始坐标原点 
	var x = 0; 
	var y = 0; 
	var w = myCanvas.width + .5; 
	var h = myCanvas.height + .5; 
	// 单个步长所表示的长度 
	var xy = 10; 
	ctx.lineWidth = 1; 
	// 画横线 

	while(y < h) {
		y += dy

		ctx.moveTo(x, y);
		ctx.lineTo(w, y);
		ctx.stroke();

		ctx.fillText(xy, x, y)
		xy +=10
	}

	// 画竖线 
	y =0; 
	xy =10; 
	while (x < w) {
		x = x + dx; 
		ctx.moveTo(x, y); 
		ctx.lineTo(x,h); 
		ctx.stroke(); 
		//纵坐标的数字 
		ctx.font = "1px Calibri"; 
		ctx.fillText(xy,x,10); 
		xy+=10; 
	}

	drawGrid('#000', 50, 50)	
}


function drawGrid(color, stepX, stepY) { 
	ctx.strokeStyle = color; 
	ctx.lineWidth = 0.5; 
	for (var i = stepX + 0.5; i < myCanvas.width; i += stepX) { 
		ctx.beginPath(); 
		ctx.moveTo(i, 0); 
		ctx.lineTo(i, myCanvas.height); 
		ctx.stroke(); 
	} 
	for (var i = stepY + 0.5; i < myCanvas.height; i += stepY) { 
		ctx.beginPath(); 
		ctx.moveTo(0, i); 
		ctx.lineTo(myCanvas.width, i); 
		ctx.stroke(); 
	}
}
