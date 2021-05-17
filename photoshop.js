var PhotoFilename=['photo/photo01.jpg','photo/photo02.jpg','photo/photo03.jpg','photo/photo04.jpg','photo/photo05.jpg','photo/photo06.jpg','photo/photo07.jpg','photo/photo08.jpg','photo/photo09.jpg','photo/photo10.jpg'];

var num=0;

$(function(){
	
	$(".menuicon").click(
		function(){
			$(".menu").fadeIn(1000);
			$(".backicon").fadeIn(1000);
			$(".menuicon").fadeOut(500);
		}
	);
	$("main").click(
		function(){
			$(".menu").fadeOut(500);
			$(".backicon").fadeOut(500);
			$(".menuicon").fadeIn(1000);
		}
	);
	$(".backicon").click(
		function(){
			$(".menu").fadeOut(500);
			$(".backicon").fadeOut(500);
			$(".menuicon").fadeIn(1000);
		}
	);
	
	$(".tb").click(
		function(){
			/*$(window).scrollTop(0);*/
			$("html,body").animate({scrollTop:0},1000);
		}
	);
	
	$(".png1").click(
		function(){
			$(".bigPng1").fadeIn(1000);
			$(".back").fadeIn(1000);
		}
	);
	
	$(".png2").click(
		function(){
			$(".bigPng2").fadeIn(1000);
			$(".back").fadeIn(1000);
		}
	);
	
	$(".back").click(
		function(){
			$(".bigPng1").fadeOut(1000);
			$(".bigPng2").fadeOut(1000);
			$(".back").fadeOut(1000);
		}
	);
	
	$(".png1").hover(
		function(){
			$(".title1").fadeIn(1000);
		},
		function(){
			$(".title1").fadeOut(300);
		}
	);
	
	$(".png2").hover(
		function(){
			$(".title2").fadeIn(1000);
		},
		function(){
			$(".title2").fadeOut(300);
		}
	);
	
});
















