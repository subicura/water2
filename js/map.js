/*
1. 맵의 x,y위치는 게임 화면 좌상단에 위치할 x,y값을 의미한다.
   (0,0)이면 맵의 최좌상단에 위치했다는 것이다.
*/
// 맵
var CMap = Class.create();
CMap.prototype = {
	initialize: function(name, width, height, x, y)
	{
		this.name = name;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.layer;

		// const value
		// 이동시 움직일 px값
		this.MOVEPIXEL = _System.screen.move;
		this.ZINDEX = "30";

		// 초기화
		this.init();
	},
	init: function()
	{
		this.layer = document.createElement('DIV');
		this.layer.style.position = "absolute";
		this.layer.style.backgroundImage = "url('game_data/maps/"+this.name+".gif')";
		this.layer.style.width = this.width*this.MOVEPIXEL;
		this.layer.style.height = this.height*this.MOVEPIXEL;
		this.layer.style.left = _System.screen.x - this.x*this.MOVEPIXEL + "px";
		this.layer.style.top = _System.screen.y - this.y*this.MOVEPIXEL + "px";
		this.layer.style.zIndex = this.ZINDEX;
	},
	create: function()
	{
		document.body.appendChild(this.layer);
	},
	move: function(direction, x)
	{
		switch(direction)
		{
			case "left":
				this.layer.style.left = (parseInt(this.layer.style.left.substring(0, this.layer.style.left.indexOf("p"))) + this.MOVEPIXEL) + "px";
				Map.x--;
				break;
			case "right":
				this.layer.style.left = (parseInt(this.layer.style.left.substring(0, this.layer.style.left.indexOf("p"))) - this.MOVEPIXEL) + "px";
				Map.x++;
				break;
			case "up":
				this.layer.style.top = parseInt(this.layer.style.top.substring(0, this.layer.style.top.indexOf("p"))) + this.MOVEPIXEL*x;
				Map.y--;
				break;
			case "down":
				this.layer.style.top = parseInt(this.layer.style.top.substring(0, 
				this.layer.style.top.indexOf("p"))) - this.MOVEPIXEL*x;
				Map.y++;
				break;
		}

	}
}
var Map;