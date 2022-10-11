var _Debug = {};
_Debug.flag = false;

Event.observe(document, 'keydown', onDebugKey);

function onDebugKey(e)
{
	if(e.keyCode == 68)
	{
		toggleDebugMapLayer();
	}
}

function toggleDebugMapLayer()
{
	if(_Debug.flag)
	{
		_Debug.flag = 0;
		hideDebugMapLayer();
	}
	else
	{
		_Debug.flag = 1;
		showDebugMapLayer();
	}
}

function showDebugMapLayer()
{
	_Debug.OUT_DIV = document.createElement("DIV");

	for (var i=0; i<_System.screen.width; i++)
	{
		for (var j=0; j<_System.screen.height; j++)
		{
			var DIV = document.createElement("DIV");
			DIV.style.border = "1px solid #000";
			DIV.style.position = "absolute";
			DIV.style.width = _System.screen.move;
			DIV.style.height = _System.screen.move;
			DIV.style.left = 96 + i*_System.screen.move;
			DIV.style.top = 43 + j*_System.screen.move;
			DIV.style.zIndex = 256;

			var block_check = (block[parseInt((Map.x+i)/16)][Map.y+j]>>15-(Map.x+i)%16)&1;
			if (block_check)
			{
				DIV.style.backgroundColor = "#aaa";
			}

			if(i == 0 && (j+Map.y)%10 == 0)
			{
				DIV.innerHTML = (j+Map.y);
			}

			if(j == 0 && (i+Map.x)%16 == 0)
			{
				DIV.innerHTML = (i+Map.x)/16;
			}

			_Debug.OUT_DIV.appendChild(DIV);
		}
	}
	document.body.appendChild(_Debug.OUT_DIV);


}

function hideDebugMapLayer()
{
	document.body.removeChild(_Debug.OUT_DIV);
}