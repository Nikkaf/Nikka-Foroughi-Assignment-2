$(document).ready(function(){
    
    
    $("#mend").click(function(){
        $('html, body').stop().animate({
            scrollTop: 10000
        }, 1000);
        $(".menu").fadeOut();
    });
    
    $(".menubtn").click(function(){
        $(".menu").fadeIn();
    });
    
    $(".closebtn").click(function(){
        $(".menu").fadeOut();
    });
  
   $(window).mousemove(function(){
       
        var X = event.pageX;
        var Y = event.pageY;
        
        $("#i1").css("margin-right" ,  X/20 + "px");
        $("#i1").css("margin-top" ,  Y/30 + "px");
       
       $("#i2").css("margin-right" ,  (-1) * X/20 + "px");
        $("#i2").css("margin-bottom" ,  (-1) * Y/10 + "px");
       
       $("#i3").css("margin-right" ,  X/10 + "px");
        $("#i3").css("margin-top" ,  Y/30 + "px");
       
       $("#i4").css("margin-left" ,  X/10 + "px");
        $("#i5").css("margin-top" ,  (-1) * Y/30 + "px");
       
       $("#i5").css("margin-right" ,  X/10 + "px");
        $("#i5").css("margin-bottom" ,  Y/30 + "px");
       
       $("#i6").css("margin-left" ,  (-1) * X/30 + "px");
        $("#i6").css("margin-top" ,   (-1) * Y/10 + "px");
       
       $("#i7").css("margin-right" ,  X/10 + "px");
        $("#i7").css("margin-top" ,  Y/10 + "px");
    
       
       $("#set1").css("margin-left" ,  (-1) * X/20 + "px");
       
       $("#set2").css("margin-left" ,  X/20 + "px");
       
       $("#set3").css("margin-left" ,  (-1) * X/20 + "px");
       
       $("#set4").css("margin-left" ,  X/20 + "px");
       
       $("#set5").css("margin-left" ,  (-1) * X/20 + "px");
       
       $("#set6").css("margin-left" ,  X/20 + "px");
       
       $("#set7").css("margin-left" ,  (-1) * X/20 + "px");
       

   });
    
    
});