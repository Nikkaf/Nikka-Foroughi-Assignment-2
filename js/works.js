$(document).ready(function(){

    $(window).scroll(function(){   
        
        var roll = $(window).scrollTop();
        
        if (roll > $('#work1').offset().top+600 && roll < $('#work2').offset().top ){
            $('#wH2').css('animation','dash 5s linear forwards');
            $('#wH2').css('animation-delay','1.2s');
        }
        
        if (roll > $('#work1').offset().top+600 && roll < $('#work2').offset().top ){
            $('#wV1').css('animation','dash 5s linear forwards');
        }
        
        if (roll > $('#work2').offset().top+600 && roll < $('#work3').offset().top ){
            $('#wH3').css('animation','dash 5s linear forwards');
            $('#wH3').css('animation-delay','1.2s');
        }
        
        if (roll > $('#work2').offset().top+600 && roll < $('#work3').offset().top ){
            $('#wV2').css('animation','dash 5s linear forwards');
        }
        
        if (roll > $('#work3').offset().top+600 && roll < $('#work4').offset().top ){
            $('#wH4').css('animation','dash 5s linear forwards');
            $('#wH4').css('animation-delay','1.2s');
        }
        
        if (roll > $('#work3').offset().top+600 && roll < $('#work4').offset().top ){
            $('#wV3').css('animation','dash 5s linear forwards');
        }
        
        if (roll > $('#work4').offset().top+600 && roll < $('#work5').offset().top ){
            $('#wH5').css('animation','dash 5s linear forwards');
            $('#wH5').css('animation-delay','1.2s');
        }
        
        if (roll > $('#work4').offset().top+600 && roll < $('#work5').offset().top ){
            $('#wV4').css('animation','dash 5s linear forwards');
        }
        
        if (roll > $('#work5').offset().top+600 && roll < $('#work6').offset().top ){
            $('#wH6').css('animation','dash 5s linear forwards');
            $('#wH6').css('animation-delay','1.2s');
        }
        
        if (roll > $('#work5').offset().top+600 && roll < $('#work6').offset().top ){
            $('#wV5').css('animation','dash 5s linear forwards');
        }

        
    });
    
});