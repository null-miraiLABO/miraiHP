var PhotoFilename=['photo/photo01.jpg','photo/photo02.jpg','photo/photo03.jpg','photo/photo04.jpg','photo/photo05.jpg','photo/photo06.jpg','photo/photo07.jpg','photo/photo08.jpg','photo/photo09.jpg','photo/photo10.jpg'];

var num=0;

$(function(){
	
	function re(){
		num++;
		$('#bgp').html('<img src="'+PhotoFilename[num]+'">');
		$('#bgp').fadeIn(1000).delay(7000).fadeOut(1000,re);				
		if(num>9)
		{
			num=1;
		}
	}
	re();
	
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
	
	
	$(".topLink").click(
		function(){
			$("html,body").animate({scrollTop:0},1000);
		}
	);
	
	$(".newsLink").click(
		function(){
			$("html,body").animate({scrollTop:750},1000);
		}
	);
	
	$(".photoLink").click(
		function(){
			$("html,body").animate({scrollTop:1550},1000);
		}
	);
	
	$(".illustLink").click(
		function(){
			$("html,body").animate({scrollTop:2390},1000);
		}
	);
	$(".appaLink").click(
		function(){
			$("html,body").animate({scrollTop:3200},1000);
		}
	);
	
	$(window).scroll(function(){
		if($(window).scrollTop()>300)
			$('.fade1').fadeIn(1000);
		}
	);
	$(window).scroll(function(){
		if($(window).scrollTop()>500)
			$('.news').delay(500).fadeIn(1000);
		}
	);
	
	$(window).scroll(function(){
		if($(window).scrollTop()>1000)
			$('.fade2').fadeIn(1000);
		}
	);
	$(window).scroll(function(){
		if($(window).scrollTop()>1200)
			$('.pho').delay(500).fadeIn(1000);
		}
	);
	
	$(window).scroll(function(){
		if($(window).scrollTop()>1800)
			$('.fade3').fadeIn(1000);
		}
	);
	$(window).scroll(function(){
		if($(window).scrollTop()>2000)
			$('.ila').delay(500).fadeIn(1000);
		}
	);
	
	$(window).scroll(function(){
		if($(window).scrollTop()>2400)
			$('.fade4').fadeIn(1000);
		}
	);
	$(window).scroll(function(){
		if($(window).scrollTop()>2700)
			$('.app').delay(500).fadeIn(1000);
		}
	);
	
	
});
















