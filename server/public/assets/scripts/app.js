var counter = 0;
var timerCount = 1000;
var logString = "meow: ";
var clickCount = 3;

$(document).ready(function(){
    init();
});

function init(){
    enable();
    setInterval(function(){
        if(counter >= clickCount){
            console.log(logString + counter);
            disable();
        }
    }, timerCount);
}

function enable(){
    $(".click-button").on('click', plusCounter);
}

function disable(){
    $(".click-button").off('click', plusCounter);
}

function plusCounter(){
    counter++;
}

//            Its OK to look this up!
//                       |
//                       |
//                       V
// Using Javascript's setInterval() set to 5 seconds,
// have your app console log out 'meow' if the
// button has been clicked three times.
// It should then meow every 5 seconds
