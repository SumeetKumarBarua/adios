
setTimeout(function(){
    $(".e1").css("display", "inherit");
    $(".e1").typed({
        strings: [" Dear All, "],
        typeSpeed: 50, // typing speed
        loop: false, // loop on or off (true or false)
        loopCount: true, // number of loops, false = infinite
        callback: function(){ } // call function after typing is done
    });
}, 0);

setTimeout(function(){
		$(".e2").css("display", "inherit");
        $(".e2").typed({
            strings: [" It was a wonderful learning experience and I also had a very good time working here" ],
            typeSpeed: 50, // typing speed
            loop: false, // loop on or off (true or false)
            loopCount: true, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 2000);

setTimeout(function(){
        $(".e3").css("display", "inherit");
        $(".e3").typed({
            strings: [" Thanks for your love, motivation and unending support "],
            typeSpeed: 50, 
            startDelay:6000,
            loop: false,
            loopCount: false, 
            callback: function(){ } 
        });
    }, 4000);

setTimeout(function(){
        $("e4").css("display", "inherit");
        $(".e4").typed({
            strings: [" I hope our paths cross again. "],
            typeSpeed: 50, 
            startDelay:8000,
            loop: false, 
            loopCount: false, 
            callback: function(){ } 
        });
    }, 6000);

setTimeout(function(){
        $(".e5").css("display", "inherit");
        $(".e5").typed({
            strings: ["  ~ Sumeet "],
            typeSpeed: 50, 
            startDelay:9000,
            loop: false, 
            loopCount: false, 
        });
    }, 8000);


