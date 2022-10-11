/*********************************************************************************************
 브라우져 판별용 전역 변수 설정
 *********************************************************************************************/
function getNavigatorType()
{
	// 1 - IE7, 2-IE, 4-FF, 8-OP
	if (navigator.userAgent.toLowerCase().match(/msie 7/))
		return 1;
	else if (navigator.userAgent.toLowerCase().match(/msie/))
		return 2;
	else if ((navigator.userAgent.toLowerCase().match(/firefox/) || navigator.userAgent.toLowerCase().match(/mozilla/)))
		return 4;
	else if (navigator.userAgent.toLowerCase().match(/opera/))
		return 8;
}

/*********************************************************************************************
 Number
 *********************************************************************************************/
function getRandNum(val)
{
	return Math.floor(Math.random()*val);
}

/*********************************************************************************************
 String
 *********************************************************************************************/
function curString (str, length, tail)
{
    var l=0;
    for (var i=0; i<str.length; i++)
    {
        l += (str.charCodeAt(i) > 128) ? 2 : 1;
        if (l > length) return str.substring(0,i) + tail;
    }
    return str;
}

/*********************************************************************************************
 IFrame
 *********************************************************************************************/
function getIFrame(aID)
{
	return document.getElementById(aID) || document.frames[aID] || null;
}

function getIFrameDocument(aID)
{
	return document.getElementById(aID).contentDocument || document.frames[aID].document || null;
}

/*********************************************************************************************
 Cookie
 *********************************************************************************************/
function setCookie(name, value, day)
{
	var today = new Date();
	var expire = new Date();
	expire.setTime(today.getTime() + day*60*60*24*1000);
	document.cookie = name + "=" + escape(value) + ((day) ? ("; expires=" + expire.toGMTString()) : "");
}

function getCookie(Name, defaultValue)
{
	var search = Name + "=";
	if(document.cookie.length > 0)
	{
		offset = document.cookie.indexOf(search);
		if(offset != -1)
		{
			offset += search.length;
			end = document.cookie.indexOf(";",offset);
			if(end == -1)
			{
				end = document.cookie.length;
			}
			return unescape(document.cookie.substring(offset, end));
		}
		else
		{
			return defaultValue;
		}
	}
	else
	{
		return defaultValue;
	}
}

/*********************************************************************************************
 XML
 *********************************************************************************************/
function $XML(obj, tag)
{
	if(obj.getElementsByTagName(tag)[0] == null)
		return ' ';
	else if(obj.getElementsByTagName(tag)[0].firstChild == null)
		return ' ';
	else
		return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}