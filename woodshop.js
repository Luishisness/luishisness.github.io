var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
	carouselList=jQuery(".grid-woodshop");

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

//carouselList.appendTo('.carousel-inner');

//$("#foo").append("<div>hello world</div>")
//carouselList.appendTo('.carousel-inner');
//$('<div class="item"><img src="/luishisness.github.io/images/chair.jpg" alt="chair"></div>').appendTo('.carousel-inner');
//$('<div class="item">' + carouselList +'<div>').appendTo('.carousel-inner');
/*for(i=0; i<carouselList.length; i++){

	//var listtoAppend= jQuery('<div class="item">' + carouselList[i] +'<div>');
	var listtoAppend= jQuery(carouselList[i]);
	console.log(listtoAppend);

	listtoAppend.appendTo('.carousel-inner');
}*/

    //On click get the box list of classes
    var getClickedBox=$(this).attr('class'),
    	afterTag= getClickedBox.indexOf("carousel-tag-woodshop" + 1),
    	getNumber= getClickedBox[afterTag];
    
    //console.log()
    console.log(afterTag);
    console.log(getNumber);

/**/$('#myCarousel').hide();



$(".grid-woodshop").click(function(){
    $('#myCarousel').fadeIn();

    //var getclickedBox =$('.grid-woodshop', this).attr('class');
    //console.log(getclickedBox);
});

//Slide show remove
$('#myCarousel').mouseleave(function(){
    $('#myCarousel').fadeOut();
});
$('.carousel-inner').click(function(){
    $('#myCarousel').fadeOut();
});





//.navbar-toggle


//.navbar-toggle