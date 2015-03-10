$(document).ready(function() {
    $('.btn').click(function() {
        var first = spinReel();
        var second = spinReel();
        var third = spinReel();
        
        if (first === second && second === third)
            youMadeCoffee();
        else
            sad();
    });
});

function spinReel() {
    return Math.floor(Math.random() * 3);
}

function youMadeCoffee() {
    console.log('Yippee!!');
}

function sad() {
    console.log(':(');
}

/*
function lattery() {
    entry function
    rolls the dics
    kicks off animation sequence based off dice roll
    sets timeout for clear function popup
}

function spin(offset, el) {
    returns nothing
    spins the element starting at the given offset (reel * 250ms?)
}

function spawnClearModal() {
    After timeout, spawn a modal at the top of .coffee-container that allows the user to reset the machine
    On 'reset' button click: reset();
}

function reset() {
    resets all elements and counters
}

*/