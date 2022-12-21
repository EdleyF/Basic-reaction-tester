//This makes the timer and starts
var start = new Date().getTime();
            
//Generates random colros by making an array oiut of what makes hexadecimale color codes
//Appends them to # to make the color code and runs a loop to make randoms numbers up to 16 and round em down
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//This is to make the shape appear and resets the timer
/*
    Makes shape appear in different locations
    Makes shape a different size each time with a maximum size of 400px and min of 100 so it isn't oo tiny or big
    Make shape either be a circle or square
    Gives the chape a different color each time
*/
function makeShapeAppear() {

    var top = Math.random() * 400;

    document.getElementById("shape").style.top = top + "px";

    var left = Math.random() * 400;

    document.getElementById("shape").style.left = left + "px";

    var width = (Math.random() * 300) + 100;

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = width + "px";

    if (Math.random() > 0.5) {

        document.getElementById("shape").style.borderRadius = "50%";

    } else {

        document.getElementById("shape").style.borderRadius = "0";

    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();

}

function appearAfterDelay() {

    //This sets a delay before running the function makeShapeAppear
    //The delay time is random with a maximum delay of 2s
    setTimeout(makeShapeAppear, Math.random() * 2000);

}

appearAfterDelay();

document.getElementById("shape").onclick =  function() {
    //This makes the shape disappear when clicked
    document.getElementById("shape").style.display = "none";
    //This stops the timer and records time
    var end = new Date().getTime();
    //This caclulates the time then converts the ms to s
    var timeTaken = (end - start) / 1000;
    //This updates the timeTaken span and adds the time taken to click shape
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    appearAfterDelay();
}