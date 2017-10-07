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
   // ctx.fillStyle = 'red';
   // ctx.shadowOffsetX = 10;
   // ctx.shadowOffsetY = 10;
   // ctx.shadowBlur    = 4;
   // ctx.shadowColor   = 'rgba(204, 204, 204, 0.5)';
   // ctx.fillRect(10, 10, 15, 150);
   // ctx.save();

   // ctx.fillStyle = 'blue';
   // ctx.shadowOffsetX = 10;
   // ctx.shadowOffsetY = 10;
   // ctx.shadowBlur    = 4;
   // ctx.shadowColor   = 'rgba(204, 204, 204, 0.5)';
   // ctx.fillRect(50, 10, 35, 150);
   // ctx.save();

   // ctx.fillStyle = 'pink';
   // ctx.shadowOffsetX = 15;
   // ctx.shadowOffsetY = 15;
   // ctx.shadowBlur    = 4;
   // ctx.shadowColor   = 'rgba(204, 204, 204, 0.5)';
   // ctx.fillRect(110, 10, 45, 150);
   // ctx.save();    

   // ctx.restore();
   // ctx.beginPath();
   // ctx.arc(255, 75, 22, 0, Math.PI *2, true);
   // ctx.closePath();
   // ctx.fill()

   // ctx.restore();
   // ctx.beginPath();
   // ctx.arc(320, 75, 15, 0, Math.PI * 2, true);
   // ctx.closePath();
   // ctx.fill();    

   // ctx.restore();
   // ctx.beginPath();
   // ctx.arc(400, 75, 8, 0, Math.PI * 2, true);
   // ctx.closePath();
   // ctx.fill();     


   var deg = Math.PI / 180;
   var obj = {
    x:300,
    y: 150,
    r: 80,
    sDeg: [30, 111, 190, 233, 280, 345],
    eDeg: [111, 190, 233, 280, 345, 30],
    style: ['#f00', '#0f0', '#00f', '#789', '#abcdef']
   }

   for(var i = 0; i < obj.sDeg.length; i++){
    drawSector(ctx, obj.x, obj.y, obj.r, obj.sDeg[i] * deg, obj.eDeg[i]*deg);
    ctx.fill();
    ctx.fillStyle = obj.style[i]
   }
}

function drawSector(ctx, x, y, r, sDeg, eDeg) {
  ctx.save()
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.arc(0, 0, r, sDeg, eDeg);
  ctx.save();

  ctx.rotate(eDeg);
  ctx.moveTo(r, 0);
  ctx.lineTo(0, 0);
  ctx.restore();

  ctx.rotate(sDeg);
  ctx.lineTo(r, 0);
  ctx.closePath();
  ctx.restore();
}