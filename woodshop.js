var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

//Active highlight for main navigation

function navigationHighlight(){


}

//Add hover to completed works
/**/
//if(viewportWidth>1052){}
$(".dropdown").hover(function(){
    $(".dropdown-menu").fadeToggle(); 
    $(".dropdown-menu").css({'position':'absolute','overflow':'hidden'});
});	
/*$(".dropdown").mouseleave(function(){
    $(".dropdown-menu").fadeOut(); 
    //$(".dropdown-menu").css({'position':'relative'});
});*/



//.navbar-toggle


//.navbar-toggle