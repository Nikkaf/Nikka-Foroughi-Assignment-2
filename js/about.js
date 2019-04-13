$(document).ready(function(){
    
    $(window).scroll(function(){   
        
        var roll = $(window).scrollTop();
        
        if (roll > $('#about').offset().top+600 && roll < $('#about2').offset().top ){
            $('#lH2').css('animation','dash 5s linear forwards');
        }
        
        if (roll > $('#about2').offset().top+600 && roll < $('#about3').offset().top ){
            $('#lH3').css('animation','dash 5s linear forwards');
            $('#lH3').css('animation-delay','1.2s');
        }
        
        if (roll > $('#about2').offset().top+300 && roll < $('#about3').offset().top ){
            $('#lV1').css('animation','dash 5s linear forwards');
        }
        
        if (roll > $('#about3').offset().top+600 && roll < $('#about4').offset().top ){
            $('#lH4').css('animation','dash 5s linear forwards');
            $('#lH4').css('animation-delay','1.2s');
        }
        
        if (roll > $('#about3').offset().top+300 && roll < $('#about4').offset().top ){
            $('#lV2').css('animation','dash 5s linear forwards');
        }
        
        if (roll > $('#about4').offset().top+600 && roll < $('#about5').offset().top ){
            $('#lH5').css('animation','dash 5s linear forwards');
            $('#lH5').css('animation-delay','1.2s');
        }
        
        if (roll > $('#about4').offset().top+300 && roll < $('#about5').offset().top ){
            $('#lV3').css('animation','dash 5s linear forwards');
        }
        
        
        
    });
    
});