var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
	carouselList=jQuery(".grid-woodshop img");

//Active highlight for main navigation

function navigationHighlight(){


}

//Add hover to completed works
/**/
//if(viewportWidth>1052){}
/*$(".dropdown").mouseenter(function(){
    $(".dropdown-menu").fadeIn(); 
    $(".dropdown-menu").css({'position':'absolute'});

    if(viewportWidth<1052){
		$(".dropdown-menu").css({'position':'relative'});
	}
});
$(".dropdown").mouseleave(function(){
    $(".dropdown-menu").fadeIn(); 
});		
*/

$('#myCarousel').carousel({
    interval: false
}); 

//$("#foo").append("<div>hello world</div>")
//carouselList.appendTo('.carousel-inner');
$('<div><img src="/luishisness.github.io/images/chair.jpg" alt="chair"></div>').appendTo('.carousel-inner');




//.navbar-toggle


//.navbar-toggle