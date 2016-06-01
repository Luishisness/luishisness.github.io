/*
This commented section can be deleted for production code
k8data.hsNum		active hot spot number found starting at 1 or -1 if not over a hot spot
k8data.layerName  	active hot spot Photoshop layer name
k8data.imgNum 		unique image number 
k8data.position.x 	x coordinate of pointer in image area in pixels for placing flyout info panel
k8data.position.y 	y coordinate of pointer in image area in pixels for placing flyout info panel
k8data.zoom			current zoom level of image
k8data.pan.x		x coordinate of current pan position of image
k8data.pan.y		y coordinate of current pan position of image
k8data.shift		status of shift key
k8data.message		status (error) messages
*/

var klixel8Current = {
	popStop: false,
	lastHover: -1,
	lastLayer: "",
	hoverStart: 0
};

var winH;
var winW;

function klixel8Move(k8data) {
	var p = gId('popout');
	if (klixel8Current.popStop == true) return; //means desktop right click was used to lock item in panel
	if (k8data.hsNum != klixel8Current.lastHover && klixel8Current.lastHover!=-1) {
		var t = new Date().getTime() - klixel8Current.hoverStart;
		p.innerHTML+="Image \""+k8data.imgNum+"\" \""+klixel8Current.lastLayer+"\" Hover End, duration: "+ t +"ms<br/><br/>";
    }
    	
	if (k8data.hsNum !=-1)
	{	if (klixel8Current.lastHover==-1) klixel8Current.hoverStart = new Date().getTime(); 
		p.innerHTML+="Image \""+k8data.imgNum+"\" \""+k8data.layerName+"\" Hovering x:"+k8data.point.x+" y:"+k8data.point.y+"<br/><br/>";
	}
	
	p.scrollTop = p.scrollHeight;
}

function klixel8Click(k8data) {
	var p=gId('popout');
	if (klixel8Current.popStop) return;
    
	p.innerHTML+="Image "+k8data.imgNum+" \""+k8data.layerName+"\" Clicked at " + k8data.point.x+ ","+k8data.point.y+"<br/><br/>";
	p.scrollTop = p.scrollHeight;
}

function klixel8ContextMenu(k8data) {
    klixel8Current.popStop = !klixel8Current.popStop;
	var p=gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" \""+k8data.layerName+"\" Right Clicked at "+k8data.point.x+","+k8data.point.y+", popStop:"+klixel8Current.popStop+"<br/><br/>";
	p.scrollTop = p.scrollHeight;
}

function klixel8PressAndHold(k8data) {
    var p = gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" \""+k8data.layerName+"\" Press And Hold at "+k8data.point.x+","+k8data.point.y+"<br/><br/>";
	p.scrollTop = p.scrollHeight;
}

function klixel8Pan(k8data) {
    var p = gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" Panned<br/><br/>";
	p.scrollTop = p.scrollHeight;

}

function klixel8DoubleClick(k8data) {
    var p = gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" \""+k8data.layerName+"\" Double Clicked<br/><br/>";
	p.scrollTop = p.scrollHeight;

}

function klixel8Zoom(k8data) {
    var p = gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" Zoomed<br/><br/>";
	p.scrollTop = p.scrollHeight;
}

function klixel8Status(k8data) {var p=gId('popout');
	p.innerHTML+="Status message: "+k8data.message+"<br/><br/>";
	p.scrollTop = p.scrollHeight;
}

//other utility functions unrelated to Klixel8 functions
function gId(s) { return document.getElementById(s); }

function getBrowserSize() {
	if (document.body && document.body.offsetWidth) {
            winW = document.body.offsetWidth;
            winH = document.body.offsetHeight;
    }
    if (document.compatMode == 'CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth) {
        winW = document.documentElement.offsetWidth;
        winH = document.documentElement.offsetHeight;
    }
    if (window.innerWidth && window.innerHeight) {
        winW = window.innerWidth;
        winH = window.innerHeight;
    }
}

window.addEventListener('load', function ()
{	getBrowserSize();
	gId('popout').style.maxHeight=winH-200+"px";
	gId('popout').style.minHeight = winH - 200 + "px";
	gId('img1').style.maxHeight = winH - 10 + "px";
	gId('img1').style.minHeight = winH - 10 + "px";
});

