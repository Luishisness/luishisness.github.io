var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

//Active highlight for main navigation

function navigationHighlight(){


}

//Add hover to completed works
/**/
//if(viewportWidth>1052){}
$(".dropdown").mouseenter(function(){
    $(".dropdown-menu").fadeIn(); 
    $(".dropdown-menu").css({'position':'relative'});
});	
$(".dropdown").mouseenter(function(){
    $(".dropdown-menu").fadeOut(); 
    //$(".dropdown-menu").css({'position':'relative'});
});



//.navbar-toggle