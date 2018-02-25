var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

var c = canvas.getContext('2d');

// Shape Functions area
function Circle(x, y, dx, dy, radius, sStyle, fStyle) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.sStyle = sStyle;
	this.fStyle = fStyle;

	this.drawStroke = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius,
			0, 2 * Math.PI, false);
		c.strokeStyle = this.sStyle;
		c.stroke();
	}

	this.drawFill = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius,
			0, 2 * Math.PI, false);
		c.fillStyle = this.fStyle;
		c.fill();
	}

	this.drawSF = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius,
			0, 2 * Math.PI, false);
		c.strokeStyle = this.sStyle;
		c.fillStyle = this.fStyle;
		c.stroke();
		c.fill();
	}

	this.updateStroke = function() {
		if(this.x + this.radius > innerWidth
			|| this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if(this.y + this.radius > innerHeight
			|| this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.drawStroke();
	}

	this.updateFill = function() {
		if(this.x + this.radius > innerWidth
			|| this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if(this.y + this.radius > innerHeight
			|| this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.drawFill();
	}

	this.updateSF = function() {
		if(this.x + this.radius > innerWidth
			|| this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if(this.y + this.radius > innerHeight
			|| this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.drawSF();
	}
}

function Rectangle(x, y, dx, dy, width, height, sStyle, fStyle) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.width = width;
	this.height = height;
	this.sStyle = sStyle;
	this.fStyle = fStyle;

	this.drawStroke = function() {
		c.beginPath();
		c.rect(this.x, this.y, this.width, this.height);
		c.strokeStyle = this.sStyle;
		c.stroke();
	}

	this.drawFill = function() {
		c.beginPath();
		c.rect(this.x, this.y, this.width, this.height);
		c.fillStyle = this.fStyle;
		c.fill();
	}

	this.drawSF = function() {
		c.beginPath();
		c.rect(this.x, this.y, this.width, this.height);
		c.strokeStyle = this.sStyle;
		c.fillStyle = this.fStyle;
		c.stroke();
		c.fill();
	}

	this.updateStroke = function() {
		if(this.x + this.width > innerWidth
			|| this.x < 0) {
			this.dx = -this.dx;
		}
		if(this.y + this.height > innerHeight
			|| this.y < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.drawStroke();
	}

	this.updateFill = function() {
		if(this.x + this.width > innerWidth
			|| this.x < 0) {
			this.dx = -this.dx;
		}
		if(this.y + this.height > innerHeight
			|| this.y < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.drawFill();
	}

	this.updateSF = function() {
		if(this.x + this.width > innerWidth
			|| this.x < 0) {
			this.dx = -this.dx;
		}
		if(this.y + this.height > innerHeight
			|| this.y < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.drawSF();
	}

	this.yRainStroke = function() {
		if(this.y > innerHeight) {
			this.y = 0;
		}
		this.y += this.dy; 

		this.drawStroke();
	}

	this.yRainFill = function() {
		if(this.y > innerHeight) {
			this.y = 0;
		}
		this.y += this.dy; 

		this.drawFill();
	}

	this.yRainSF = function() {
		if(this.y > innerHeight) {
			this.y = 0;
		}
		this.y += this.dy; 

		this.drawSF();
	}
}

function FourLeafFlower(x, y, dx, dy, radius, lineAngle, sStyleC, fStyleC, sStyleP, fStyleP) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.lineAngle = lineAngle;
	this.sStyleC = sStyleC;
	this.fStyleC = fStyleC;
	this.sStyleP = sStyleP;
	this.fStyleP = fStyleP;

	this.drawSFCSP = function() {
		c.strokeStyle = this.sStyleC;
		c.fillStyle = this.fStyleC;
		c.beginPath();
		c.arc(this.x, this.y, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.fill();

		c.strokeStyle = this.sStyleP;
		c.fillStyle = this.fStyleP;
		c.beginPath();
		c.arc(this.x - this.radius, this.y, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.beginPath();
		c.arc(this.x + this.radius, this.y, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.beginPath();
		c.arc(this.x, this.y - this.radius, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.beginPath();
		c.arc(this.x, this.y + this.radius, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.beginPath();
		c.moveTo(this.x, this.y);
		c.arc(this.x, this.y, this.radius * 2.5, this.lineAngle, this.lineAngle, false);
		c.stroke();
	}

	this.drawSFCSFP = function() {
		c.strokeStyle = this.sStyleC;
		c.fillStyle = this.fStyleC;
		c.beginPath();
		c.arc(this.x, this.y, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.fill();

		c.strokeStyle = this.sStyleP;
		c.fillStyle = this.fStyleP;
		c.beginPath();
		c.arc(this.x - this.radius, this.y, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.fill();
		c.beginPath();
		c.arc(this.x + this.radius, this.y, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.fill();
		c.beginPath();
		c.arc(this.x, this.y - this.radius, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.fill();
		c.beginPath();
		c.arc(this.x, this.y + this.radius, this.radius, Math.PI * 2, 0, false);
		c.stroke();
		c.fill();
		c.beginPath();
		c.moveTo(this.x, this.y);
		c.arc(this.x, this.y, this.radius * 2.5, this.lineAngle, this.lineAngle, false);
		c.stroke();
	}

	this.updateSFCSP = function() {
		if (dx != 0 && dy != 0) {
			// y = (dy / dx) * x + b
			// x = (y - b) * (dx / dy)
			var b = y - (dy / dx) * x;
			var yX0 = (dy / dx) * 0 + b;
			var xY0 = (0 - b) * (dx / dy);
			var yXI = (dy / dx) * innerWidth + b;
			var xYI = (innerHeight - b) * (dx / dy);

			if (dx > 0 && dy > 0 && (this.y > innerHeight || this.x > innerWidth)) {
				if (yX0 >= 0 && yX0 <= innerHeight) {
					this.x = 0;
					this.y = yX0;
				} else {
					this.x = xY0;
					this.y = 0;
				}
			}
			if (dx > 0 && dy < 0 && (this.y < 0 || this.x > innerWidth)) {
				if (yX0 >= 0 && yX0 <= innerHeight) {
					this.x = 0;
					this.y = yX0;
				} else {
					this.x = xYI;
					this.y = innerHeight;
				}
			}
			if (dx < 0 && dy > 0 && (this.y > innerHeight || this.x < 0)) {
				if (yXI >= 0 && yXI <= innerHeight) {
					this.x = innerWidth;
					this.y = yXI;
				} else {
					this.x = xY0;
					this.y = 0;
				}
			}
			if (dx < 0 && dy < 0 && (this.y < 0 || this.x < 0)) {
				if (yXI >= 0 && yXI <= innerHeight) {
					this.x = innerWidth;
					this.y = yXI;
				} else {
					this.x = xYI;
					this.y = innerHeight;
				}
			}
		}

		if (dx == 0 && dy != 0) {
			if (this.y < 0) {
				this.y = innerHeight;
			}
			if (this.y > innerHeight) {
				this.y = 0;
			}
		}

		if (dx != 0 && dy == 0) {
			if (this.x < 0) {
				this.x = innerWidth;
			}
			if (this.x > innerWidth) {
				this.x = 0;
			}
		}

		this.x += this.dx;
		this.y += this.dy;

		this.drawSFCSP();
	}

	this.updateSFCSFP = function() {
		if (dx != 0 && dy != 0) {
			// y = (dy / dx) * x + b
			// x = (y - b) * (dx / dy)
			var b = y - (dy / dx) * x;
			var yX0 = (dy / dx) * 0 + b;
			var xY0 = (0 - b) * (dx / dy);
			var yXI = (dy / dx) * innerWidth + b;
			var xYI = (innerHeight - b) * (dx / dy);

			if (dx > 0 && dy > 0 && (this.y > innerHeight || this.x > innerWidth)) {
				if (yX0 >= 0 && yX0 <= innerHeight) {
					this.x = 0;
					this.y = yX0;
				} else {
					this.x = xY0;
					this.y = 0;
				}
			}
			if (dx > 0 && dy < 0 && (this.y < 0 || this.x > innerWidth)) {
				if (yX0 >= 0 && yX0 <= innerHeight) {
					this.x = 0;
					this.y = yX0;
				} else {
					this.x = xYI;
					this.y = innerHeight;
				}
			}
			if (dx < 0 && dy > 0 && (this.y > innerHeight || this.x < 0)) {
				if (yXI >= 0 && yXI <= innerHeight) {
					this.x = innerWidth;
					this.y = yXI;
				} else {
					this.x = xY0;
					this.y = 0;
				}
			}
			if (dx < 0 && dy < 0 && (this.y < 0 || this.x < 0)) {
				if (yXI >= 0 && yXI <= innerHeight) {
					this.x = innerWidth;
					this.y = yXI;
				} else {
					this.x = xYI;
					this.y = innerHeight;
				}
			}
		}

		if (dx == 0 && dy != 0) {
			if (this.y < 0) {
				this.y = innerHeight;
			}
			if (this.y > innerHeight) {
				this.y = 0;
			}
		}

		if (dx != 0 && dy == 0) {
			if (this.x < 0) {
				this.x = innerWidth;
			}
			if (this.x > innerWidth) {
				this.x = 0;
			}
		}

		this.x += this.dx;
		this.y += this.dy;

		this.drawSFCSFP();
	}
}

function LinesDown(x, y, dy, longness, sStyle) {
	this.x = x;
	this.y = y;
	this.dy = dy;
	this.longness = longness;
	this.sStyle = sStyle;

	this.drawDown = function() {
		c.strokeStyle = sStyle;
		c.beginPath();
		c.moveTo(this.x, this.y);
		c.lineTo(this.x, this.y + this.longness);
		c.stroke();
	}

	this.updateDown = function() {
		if (this.y > innerHeight) {
			this.y = 0;
		}
		if (this.y < 0) {
			this.y = innerHeight;
		}
		this.y += this.dy;
		this.drawDown();
	}
}

// Generate Materials area
var arrayAutumnCircle = [];
for (var i = 0; i < 100; i++) {
	var x = Math.random() * (innerWidth - radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius * 2) + radius;
	var dx = 1 * (Math.random() - 0.5);
	var dy = 1 * (Math.random() - 0.5);
	var radius = Math.random() * 20 + 30;

	var rS = Math.floor(Math.random() * 155) + 50;
	var gS = Math.floor(Math.random() * 155) + 50;
	var bS = Math.floor(Math.random() * 0);
	var rF = Math.floor(Math.random() * 255);
	var gF = Math.floor(Math.random() * 255);
	var bF = Math.floor(Math.random() * 55);
	var aF = Math.random() * 0.3 + 0.1;
	sStyle = "rgb("+ rS +","+ gS +","+ bS +")";
	fStyle = "rgba("+ rF +","+ gF +","+ bF +","+ aF +")";

	arrayAutumnCircle.push(new Circle(x, y, dx, dy, radius, sStyle, fStyle));
}
var arrayWinterRectangle = [];
for (var i = 0; i < 100; i++) {
	var x = Math.random() * (innerWidth - width);
	var y = Math.random() * (innerHeight - height);
	var dx = (Math.random() - 0.5);
	var dy = (Math.random());
	var width = 100;
	var height = 100;

	var rS = Math.floor(Math.random() * 55);
	var gS = Math.floor(Math.random() * 155);
	var bS = Math.floor(Math.random() * 155) + 100;
	var rF = Math.floor(Math.random() * 10);
	var gF = Math.floor(Math.random() * 155);
	var bF = Math.floor(Math.random() * 255);
	var aF = Math.random() * 0.5;
	sStyle = "rgb("+ rS +","+ gS +","+ bS +")";
	fStyle = "rgba("+ rF +","+ gF +","+ bF +","+ aF +")";

	arrayWinterRectangle.push(new Rectangle(x, y, dx, dy, width, height, sStyle, fStyle));
}
var arraySpringFlower = [];
for (var i = 0; i < 20; i++) {
	var x = Math.random() * (innerWidth - 2 * radius) + radius;
	var y = Math.random() * (innerHeight - 2 * radius) + radius;
	var dx = 2 * (Math.random() - 0.5);
	var dy = -1 * (Math.random()) - 0.5;
	var radius = Math.random() * 20 + 30;
	var lineAngle = Math.random() * 2 * Math.PI;


	var rSC = Math.floor(Math.random() * 155) + 100;
	var gSC = Math.floor(Math.random() * 155) + 100;
	var bSC = Math.floor(Math.random() * 155) + 100;
	var aSC = Math.random() * 0.3 + 0.7;

	var rFC = Math.floor(Math.random() * 155) + 100;
	var gFC = Math.floor(Math.random() * 155) + 100;
	var bFC = Math.floor(Math.random() * 20) + 100;
	var aFC = Math.random() * 0.5 + 0.5;

	var rSP = Math.floor(Math.random() * 55) + 120;
	var gSP = Math.floor(Math.random() * 55) + 120;
	var bSP = Math.floor(Math.random() * 20) + 100;
	var aSP = Math.random() * 0.5 + 0.5;

	var rFP = Math.floor(Math.random() * 155) + 100;
	var gFP = Math.floor(Math.random() * 100) + 155;
	var bFP = Math.floor(Math.random() * 150) + 50;
	var aFP = Math.random() * 0.5 + 0.5;

	var sStyleC = "rgba("+ rSC +","+ gSC +","+ bSC +","+ aSC +")";
	var fStyleC = "rgba("+ rFC +","+ gFC +","+ bFC +","+ aFC +")";
	var sStyleP = "rgba("+ rSP +","+ gSP +","+ bSP +","+ aSP +")";
	var fStyleP = "rgba("+ rFP +","+ gFP +","+ bFP +","+ aFP +")";
	arraySpringFlower.push(new FourLeafFlower(x, y, dx, dy, radius, lineAngle, sStyleC, fStyleC, sStyleP, fStyleP));
}
var arraySummerLines = [];
for (var i = 0; i < 150; i++) {
	var x = Math.random() * innerWidth;
	var y = Math.random() * innerHeight;
	var dy = Math.random() + 1;
	var longness = Math.random() * 5 + 50;
	c.lineWidth = Math.random() * 2 + 1;

	var r = Math.floor(Math.random() * 20);
	var g = Math.floor(Math.random() * 100);
	var b = Math.floor(Math.random() * 155) + 100;
	var a = Math.random() * 0.3 + 0.1;
	var sStyle = "rgba("+ r +","+ g +","+ b +","+ a +")";
	arraySummerLines.push(new LinesDown(x, y, dy, longness, sStyle));
}

// animate area
function animate() {
	c.clearRect(0, 0, innerWidth, innerHeight);
	requestAnimationFrame(animate);

	// Seasons code storage area
	// arrayAutumnCircle
	// for (var i = 0; i < arrayAutumnCircle.length; i++) {
	// 	arrayAutumnCircle[i].updateSF();
	// }
	// arrayWinterRectangle
	// for (var i = 0; i < arrayWinterRectangle.length; i++) {
	// 	arrayWinterRectangle[i].yRainSF();
	// }
	// arraySpringFlower
	// for (var i = 0; i < arraySpringFlower.length; i++) {
	// 	arraySpringFlower[i].updateSFCSFP();
	// }
	// arraySummerLines
	for (var i = 0; i < arraySummerLines.length; i++) {
		arraySummerLines[i].updateDown();
	}

	//test area
}
animate();