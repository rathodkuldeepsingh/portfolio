
var color=["#41aede","#FF9800","#009688","#025caf","#909090","#cddc39","#e55344","#9e9e9e","#6accb6"];
var titles=["My Story","Kerala Floods","Let's Talk","Mixed Reality","Match $ Mix","Scarrom","B B Express","Hoshar Mumbai","Graphic Design"];
var number, num;
$(document).ready(function(){
	$(".project_strip").css({"transform":"translateX(0)"});
	var scrollTime = 1.2;			//Scroll time
	var scrollDistance = 170;
	var height=$(window).height();
	var width=$(window).width();	
	var top=0;
	var down=true;	//Distance. Use smaller value for shorter scroll and greater value for longer scroll
	
	/*for(var i=1;i<10;i++)
		{

			$(".inside>img").eq(i-1).css({'top':i*100+'vh'});
			console.log('aaa '+i*5);
			if(i%2==0)
			{
				$(".inside>img").eq(i).css({"right":"0vw"});
			}
			else
			{	
				$(".inside>img").eq(i).css({"left":"0vw"});

			}
		}
	*/


		
	/*$(window).on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/50 || -event.originalEvent.detail/2;
		var scrollTop = $(window).scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($(window), scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Expo,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	*/


	$(".project_strip").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 2);
   	 $('.tags').scrollLeft -= (delta * 2);

      event.preventDefault();








   });

	$(window).scroll(function(){
		var wScroll=$(this).scrollTop();
		//console.log(height+","+wScroll);
		/*$(document).bind('mousewheel', function(e){
		     if(e.originalEvent.wheelDelta < 0) {
		         

		        if(wScroll>=$("body").offset().top)
		        {
		  					
					
					//console.log("andar");
					$([document.documentElement, document.body]).animate({
		        	scrollTop: $(".open").offset().top
		    		}, 300);
					
				}
				        down=true;
		     }else 
		     {
		         if(wScroll<=$(".open").offset.top)
				{
					$([document.documentElement, document.body]).animate({
		        	scrollTop: $("body").offset().top
		    		}, 100);
					

				}
		         down=false;
		     }

		     //prevent page fom scrolling
		    
		 });

		*/

		$(".entry").css({'transform': 'translate(0px, -'+wScroll/20+'% )'});
		$(".back>p").css({'transform': 'translate(0px, +'+wScroll/20+'% )'});
		
		if(wScroll>height*0.6){
			$(".inside").eq(number-1).find(".desc").css({"opacity":"1","transform":"translateY(0)"});
		}
		
		/*$(".inside>img").eq(0).css({'transform': 'translate(0px,-'+wScroll/10+'% )'});
		$(".inside>img").eq(1).css({'transform': 'translate(0px,-'+wScroll/5+'% )'});
		$(".inside>img").eq(2).css({'transform': 'translate(0px,-'+wScroll/3.5+'% )'});
		$(".inside>img").eq(3).css({'transform': 'translate(0px,-'+wScroll/2.75+'% )'});
		$(".inside>img").eq(4).css({'transform': 'translate(0px,-'+wScroll/2.2+'% )'});
		*/
		
	})
		$(window).on('popstate', function(event) {
			goback();
		});



	$(".pro>.project").hover(function(){
		num=$(this).index();
		if(top==0)
		{
		$(".cont").css("background-color",color[num-1]);
		$(this).find("p").css({"opacity":"0.9","transform":"translateX(0)"});
		$(".tags>div").eq(num).css({"opacity":"1","transform":"translateY(0%)"});
		$(".tags>div").eq(num).find("p").css({"opacity":"1","transform":"translateY(0%)"});
		}
	},function(){
		
		$(this).find("p").css({"opacity":"0.0","transform":"translateX(-10%)"});
		$(".tags>div").eq(num).css({"opacity":"0","transform":"translateY(-200%)"});
		$(".tags>div").eq(num).find("p").css({"opacity":"0","transform":"translateY(-100%)"});
	

	});

	$(".title").hover(function(){
		$(this).css({"letter-spacing":"8px","color":"black","text-decoration":"underline overline"});

	},function(){
		$(this).css({"letter-spacing":"6px","color":"black","text-decoration":"none"});
	});


	$(".title").click(function(){
		//$("body").animate({scrollTop:0},800,"easeInOutQuart");
		//window.scrollTo(000, 0);
		goback();
    	
	});

	$(".pro>.project").click(function(){
		
		
		number=$(this).index();
		
		openpro(number);
		top=1;
	});
	$(document).on("click",".end>.project", function(){
    	
    	if(number>=2 && number<=8)
    		{var temp=$(this).index();
		    	switch(temp){
		    		case 0: number=number-1; break;
		    		case 1: number=number+1; break;
		    	}
		    }
		else if(number==1)
		{
			number=2;
		}
		else{
			number=8;
		}
    	window.scrollTo(000, 0);
    	setTimeout(function(){
    		clear();
    	},1000);
    	setTimeout(function(){
    		openpro(number);
    	},2000);
    	
  	});
  	$(document).on("mouseover",".end>.project", function(){
    	var temp=$(this).index();
    	if(number==1)
    	{
    		$(".end").css("background-color",color[number]);
    	}
    	else if(number==9)
    	{
    		$(".end").css("background-color",color[number-2]);
    	}
    	else
    	{
    		switch(temp){
    		case 0: temp=-2; break;
    		case 1: temp=0; break;
    		}
    	$(".end").css("background-color",color[number+temp]);
    	}
    	$(this).find("p").css({"opacity":"0.9","transform":"translateX(0)"});
    
  	});
  	$(document).on("mouseout",".end>.project", function(){
    	
    	$(this).find("p").css({"opacity":"0","transform":"translateX(-10%)"});
    	$(".end").css("background-color",color[number-1]);
    
  	});
	

	function colorit(a){
		$(".end").css({"background":color[a-1]});
		if(a==1)
		{
			var bg0 = $(".pro>.project").eq(a+1).css('background-image');
			$(".end>.project").css({"background-image":bg0});
			
		}
		else if(a==9)
		{
			var bg0 = $(".pro>.project").eq(a-1).css('background-image');
			$(".end>.project").css({"background-image":bg0});
			
		}
		else
		{
			
			var bg1 = $(".pro>.project").eq(a+1).css('background-image');
			var bg0 = $(".pro>.project").eq(a-1).css('background-image');
	        //bg1 = bg1.replace('url(','').replace(')','').replace(/\"/gi, "");

			$(".end>.project").eq(1).css({"background-image":bg1});
			$(".end>.project").eq(0).css({"background-image":bg0});
		}
	}


	function openpro(a){
		$(".cont").css("background-color",color[a-1]);
		$(".cont").css("height","200vh");
		$(".open").css("display","block");
		$(".entry").css({"display":"block","opacity":"1"});
		$(".entry>img").eq(a-1).css({"display":"block","opacity":"1"});
		$(".back>p").eq(a-1).css({"opacity":"1","color":color[a-1]});
		$(".inside").eq(a-1).css({"display":"block"});
		setTimeout(function () {
      	$(".entry").css({"top":"51vh"});
    	}, 100);
    	$(".title").css({"background":"#ffffff"});
    	$(".title>hr").eq(1).css({"opacity":"1","width":"1.2vh","transform":"rotate(-30deg)"});
    	$(".title>hr").eq(0).css({"opacity":"1","width":"1.2vh","transform":"rotate(30deg)"});
    	//$(".entry").css({"visibility":"block"});
		//$(".entry").css({"display":"block","visibility":"visible"});
		$(".inside").eq(a-1).find(".page:last-child").children().last().css({"margin-bottom":"10vh"});

		$(".project_strip").animate({scrollLeft:0},800,"easeInOutQuart");
		$(".project_strip").css("transform","translateX(100vw)");
		if(a==1){

			$(".inside").eq(a-1).find(".page:last-child").append("<div class=\"end\"><div class=\"project\"><p>"+titles[a]+"</p></div><div>");
			$(".end>.project").css({"left":"50vw","transform":"translateX(-50%)","margin-left":"0"});
			colorit(a);
		}else if( a==9){
					
			$(".inside").eq(a-1).find(".page:last-child").append("<div class=\"end\"><div class=\"project\"><p>"+titles[a-2]+"</p></div><div>");
			$(".end>.project").css({"left":"50vw","transform":"translateX(-50%)","margin-left":"0"});
			colorit(a);
		}
		else{
		$(".inside").eq(a-1).find(".page:last-child").append("<div class=\"end\"><div class=\"project\"><p>"+titles[a-2]+"</p></div><div class=\"project\"><p>"+titles[a]+"</p></div><div>");
			colorit(a);
		}
		
	}

	function goback(){
			top=0;
		$(".cont").css({"height":"100vh"});
		$(".entry").css({"top":"100vh","opacity":"0"});
		$(".entry").css({"opacity":"0"});
		setTimeout(function () {
      	$(".open").css("display","none");
		$(".entry").css({"display":"none"});
		$(".inside").eq(number-1).css({"display":"none"});
		clear();
    	}, 200);
    	$(".entry>img").eq(number-1).css({"display":"none","opacity":"0"});
    	$(".back>p").eq(number-1).css({"opacity":"0"});
    	$(".project_strip").animate({scrollLeft:0},800,"easeInOutQuart");
    	setTimeout(function () {
      	$(".project_strip").css("transform","translateX(0vw)");
      	
    	}, 300);
    	$(".title").css({"background":"#ffffff00"});
    	$(".title>hr").eq(1).css({"opacity":"0","width":"0vh","transform":"rotate(0deg)"});
    	$(".title>hr").eq(0).css({"opacity":"0","width":"0vh","transform":"rotate(0deg)"});
    	$(".end").remove();
	}


	function clear(){
		$(".open").css("display","none");
		$(".entry").css({"display":"none"});
		$(".entry>img").css({"display":"none","opacity":"0"});
		$(".back>p").css({"opacity":"0"});
		$(".inside").css({"display":"none"});
		$(".end").remove();

	}
	

});