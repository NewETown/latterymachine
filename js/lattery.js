// Each offset is the same per panel, offsets are in degrees
// Offsets are calculated by 360 / 3 = 120 degree viewport per panel
var COFFEE_OFFSET = 0;
var TEA_OFFSET = 120;
var ESPRESSO_OFFSET = 240

$(document).ready(function() {

    $('.go-button').click(function() {
        $(this).addClass('paused');
        
        var first = spinReel();
        var second = spinReel();
        var third = spinReel();
        
        spin(first, '#cup');
        spin(second, '#filter');
        spin(third, '#ingredients');
        
        if (first === second && second === third)
            youMadeCoffee();
        else
            sad();
    });
    
});

function spinReel() {
    return Math.ceil(Math.random() * 3);
}

function youMadeCoffee() {
    console.log('Yippee!!');
}

function sad() {
    console.log(':(');
}

function spin(num, el) {
    // Generate the number of times to spin
    var offset = 1 + (num/3);
    
    // Need to add animation for each browser
    var webkit = "-webkit-";
    var moz = "-moz-";
    var ms = "-ms-";
    var animation = "animation-iteration-count: " + offset + ";";
    
//    $(el).attr('style', webkit + animation + " " + moz + animation + " " + ms + animation + " " + animation);
    $(el).addClass("spin spin" + num);
    
}

function reset() {
    $('.go-button').removeClass('paused');
}

/*
function lattery() {
    entry function
    rolls the dics
    kicks off animation sequence based off dice roll
    sets timeout for clear function popup
}

function spawnClearModal() {
    After timeout, spawn a modal at the top of .coffee-container that allows the user to reset the machine
    On 'reset' button click: reset();
}

*/