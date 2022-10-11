// 케릭터
var CPlayer = Class.create();
CPlayer.prototype = {
	initialize: function(type, x, y)
	{
		this.type = type;
		this.x = x;
		this.y = y;
		this.layer;
		this.direction = "down";
		this.direction_num = "1";

		// const value
		// 이동시 움직일 px값
		this.MOVEPIXEL = _System.screen.move;
		this.ZINDEX = "80";

		// 초기화
		this.init();
	},
	init: function()
	{
		this.layer = document.createElement('IMG');
		this.layer.style.position = "absolute";
		this.layer.style.left = _System.screen.x + this.x*this.MOVEPIXEL + "px";
		this.layer.style.top = _System.screen.y + this.y*this.MOVEPIXEL + "px";
		this.layer.style.zIndex = this.ZINDEX;
		this.layer.src = this.getPlayerImgSrc(this.direction, this.direction_num);
		
		var date = new Date();
		this.lastSecond = date.getSeconds() + date.getMilliseconds()/1000;
	},
	create: function()
	{
		document.body.appendChild(this.layer);
	},
	move: function(direction, x)
	{
		// 그림 변경
		if(this.direction != direction || this.direction_num == "2")
		{
			this.layer.src = this.getPlayerImgSrc(direction, "1");
			this.direction = direction;
			this.direction_num = "1";
		}
		else
		{
			this.layer.src = this.getPlayerImgSrc(direction, "2");
			this.direction_num = "2";
		}

		// 캐릭터 이동
		if(x)
		{
			switch(this.direction)
			{
				case "left":
					this.layer.style.left = parseInt(this.layer.style.left.substring(0, this.layer.style.left.indexOf("p"))) - this.MOVEPIXEL*x;
					this.x--;
					break;
				case "right":
					this.layer.style.left = parseInt(this.layer.style.left.substring(0, this.layer.style.left.indexOf("p"))) + this.MOVEPIXEL*x;
					this.x++;
					break;
				case "up":
					this.layer.style.top = parseInt(this.layer.style.top.substring(0, this.layer.style.top.indexOf("p"))) - this.MOVEPIXEL*x;
					this.y--;
					break;
				case "down":
					this.layer.style.top = parseInt(this.layer.style.top.substring(0, this.layer.style.top.indexOf("p"))) + this.MOVEPIXEL*x;
					this.y++;
					break;
			}
		}
	},
	getPlayerImgSrc: function(direction, num)
	{
		return "game_data/player/"+this.type+"_"+direction+"_"+num+".gif";	
	}
}
var Player;