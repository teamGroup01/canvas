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
 ctx.lineWidth = 20;
 ctx.fillStyle = 'orange';
 ctx.strokeStyle = '#9F9';

 ctx.lineJoin = 'beval';
 ctx.strokeRect(10, 10, 200, 200);

 ctx.lineJoin = 'round';
 ctx.strokeRect(250, 10, 200, 200);
}

