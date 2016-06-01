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

function fd_loadImage(k8data){
        var p = gId('popout');


    if(k8data.hsNum !=-1){

        p.style.top= k8data.point.y+ "px";
        p.style.left=  (k8data.point.x + 20) + "px";

        switch(k8data.layerName) {
            case "burgers":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='cookout-classics.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/burger.png' alt=''></div>";
                break;
            case "salmon":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='seafood.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/salmon.png' alt=''></div>";
                break;
            case "pickles":
                //p.innerHTML="<div><h2>Pickles</h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/pickles.png' alt=''></div>";
                break;
            case "watermelon":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='fruits.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/melon.png' alt=''></div>";
                break;
            case "grilledveg":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='fruits.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/mixedveg.png' alt=''></div>";
                break;
            case "glad":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='summer-stocup.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/glad.png' alt=''></div>";
                break;
            case "papertowel":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='summer-stocup.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/paper.png' alt=''></div>";
                break;
            case "salad":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='summer-stocup.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/dressing.png' alt=''></div>";
                break;
            case "wineone":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='beer.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/winea.png' alt=''></div>";
                break;
            case "winetwo":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='beer.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/winea.png' alt=''></div>";
                break;
            case "bai":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='cold-drinks.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/bai.png' alt=''></div>";
                break;
            case "pretzels":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='snacks-copy.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/pretz.png' alt=''></div>";
                break;
            case "icecream":
                //code block
                //p.innerHTML="<div><a href='#' target='_blank'><h2><img src='sizzlin-copy.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Get Inspired<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/ice.png' alt=''></div>";
                break;
            case "brownies":
                //p.innerHTML="<div><h2><a href='#' target='_blank'><h2><img src='snacks-copy.png' alt=''></h2><button class='summer-central-rts-button' type='button'>Shop Now<img src='arrow.png'></button></a></div>";
                p.innerHTML="<div><img src='/luishisness.github.io/klixel8/shop_images/brown.png' alt=''></div>";
                break;
            default:
                p.innerHTML="";
                break;
        }

        
        return;
    }
    else{
        p.style.top= k8data.point.y+ "px";
        p.style.left=  (k8data.point.x + 20) + "px";
        p.innerHTML="<p>Hover an item for more info</p>"
        return;
    }
}

var klixel8Current = {
	popStop: false,
	lastHover: -1,
	lastLayer: "",
	hoverStart: 0
};

var winH;
var winW;

function klixel8Move(k8data) {

    fd_loadImage(k8data);
	/*var p = gId('popout');
	if (klixel8Current.popStop == true) return; //means desktop right click was used to lock item in panel
	if (k8data.hsNum != klixel8Current.lastHover && klixel8Current.lastHover!=-1) {
		var t = new Date().getTime() - klixel8Current.hoverStart;
		p.innerHTML+="Image \""+k8data.imgNum+"\" \""+klixel8Current.lastLayer+"\" Hover End, duration: "+ t +"ms<br/><br/>";
    }
    	
	if (k8data.hsNum !=-1)
	{	if (klixel8Current.lastHover==-1) klixel8Current.hoverStart = new Date().getTime(); 
		p.innerHTML+="Image \""+k8data.imgNum+"\" \""+k8data.layerName+"\" Hovering x:"+k8data.point.x+" y:"+k8data.point.y+"<br/><br/>";
	}
	
	p.scrollTop = p.scrollHeight;*/
	

}

function klixel8Click(k8data) {
	/*var p=gId('popout');
	if (klixel8Current.popStop) return;
    
	p.innerHTML+="Image "+k8data.imgNum+" \""+k8data.layerName+"\" Clicked at " + k8data.point.x+ ","+k8data.point.y+"<br/><br/>";
	p.scrollTop = p.scrollHeight;*/
}

function klixel8ContextMenu(k8data) {

   /* klixel8Current.popStop = !klixel8Current.popStop;
	var p=gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" \""+k8data.layerName+"\" Right Clicked at "+k8data.point.x+","+k8data.point.y+", popStop:"+klixel8Current.popStop+"<br/><br/>";
	p.scrollTop = p.scrollHeight;*/
}

function klixel8PressAndHold(k8data) {
    //fd_loadImage(k8data);
    /*var p = gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" \""+k8data.layerName+"\" Press And Hold at "+k8data.point.x+","+k8data.point.y+"<br/><br/>";
	p.scrollTop = p.scrollHeight;*/
}

function klixel8Pan(k8data) {
    /*var p = gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" Panned<br/><br/>";
	p.scrollTop = p.scrollHeight;*/

}

function klixel8DoubleClick(k8data) {
    /*var p = gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" \""+k8data.layerName+"\" Double Clicked<br/><br/>";
	p.scrollTop = p.scrollHeight;*/

}

function klixel8Zoom(k8data) {
    /*var p = gId('popout');
	p.innerHTML+="Image "+k8data.imgNum+" Zoomed<br/><br/>";
	p.scrollTop = p.scrollHeight;*/
}

function klixel8Status(k8data) {var p=gId('popout');
	/*p.innerHTML+="Status message: "+k8data.message+"<br/><br/>";
	p.scrollTop = p.scrollHeight;*/
}


//gId shortens document.getElementById
function gId(s) { return document.getElementById(s); }

//winH and winW are for optional non-Klixel8 page resource resizing
var winH;
var winW;

//getBrowserSize is optional, used to resize height of non-Klixel8 page resources
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

//optional, resize our status div on the left of the screen to fill screen height
window.addEventListener('load', function ()
{   getBrowserSize();
    //gId('popout').style.maxHeight=winH-200+"px";
    //gId('popout').style.minHeight=winH-200+"px";
});

//sizeDiv: required for responsize images, sets the div height according to the aspect ratio of the image
function sizeDiv()  
{   var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++)
    {   if (divs[i].getAttribute('data-klixel8src'))
        {   divs[i].style.height = divs[i].clientWidth * divs[i].getAttribute("k8aspectratio") + "px";
        }
    }
}

//required for responsive images, call sizeDiv when page is loaded or resized
window.addEventListener('load', sizeDiv);
window.addEventListener('resize', sizeDiv);


