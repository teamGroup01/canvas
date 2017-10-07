var canvasPrototype = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
console.dir(CanvasRenderingContext2D)
canvasPrototype.dottedLine = function(x1, y1, x2, y2, interval) {
	if(!interval) {
		interval = 5;
	}

	var isHorizontal = true;

	if(x1 == x2) {
		isHorizontal = false;
	}

	var len = isHorizontal ? x2 - x1 : y2 - y1;

	this.moveTo(x1, y1);
	var progress = 0;

	while(len > progress) {
		progress += interval;

		if(progress > len) {
			progress = len
		}

		if(isHorizontal) {
			this.moveTo(x1 + progress, y1);
			this.arc(x1 + progress, y1, 1, 0, Math.PI * 2, true);
			this.fill()
		} else {
			this.moveTo(x1, y1 + progress);
			this.arc(x1, y1 + progress, 1, 0, Math.PI *2 , true);
			this.fill()
		}
	}
}