$(document).ready(function(){
   $(".arrow").click(function(e){
		$("#thumbline1").fadeIn(200).fadeOut(200).fadeIn(200); 
    });
	 $(".arrowContact").click(function(e){
		$("#contact").fadeIn(200).fadeOut(200).fadeIn(200); 
    });	 	 
	$("#contactMe").click(function(e){
		$("#contact").fadeIn(200).fadeOut(200).fadeIn(200); 
    });	 
	$("#myWork").click(function(e){
		$("#thumbline1").fadeIn(200).fadeOut(200).fadeIn(200); 
    });
	var headerHeight = $( "header" ).height();
	$(".mainHeader").css("height"," -webkit-calc(100vh - " + headerHeight + "px)");
});

var body = $("html, body");
body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
});
