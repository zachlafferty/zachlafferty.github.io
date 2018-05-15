var image = document.getElementById("beginButton");
var bigPlane = document.getElementById("bigPlane");
var smallPlane = document.getElementById("smallPlane");
var bigPlaneDistance;
var smallPlaneDistance;
    
// Winning Plane Variables + Initial Display
    var planeWinner = document.getElementById("planeWinner");
    planeWinner.style.display = 'none';
    
// Racing  Random Speed Variables
var number = Math.random() * 75;
var number2 = Math.random() * 75;
    
// Initial Status of Race
var flightStart = false;
    
// Change Button Image
function changeButtonStatus(){
 image.src = "cis370Finalproject/goButton.jpg";
}

// Begin Race
function beginRace()
{
    flightStart = true;
    
    // Begin Timing Intervals for Plane Objects
    setTimeout(function (){
        
        var width = screen.width;
        
    // Declare Variables for numbers to be used for planes moving...
    var newNumber = (Math.random() * 100) + number;
    var newNumber2 = (Math.random() * 100) + number2;
        
    // Align Planes to Left margins, establish moving counting procedure, add distances to simulate race...
    
    // Big Plane Distance
    bigPLane.style.marginLeft = newNumber + 'px';
    number = newNumber;
    bigPlaneDistance = bigPlane.style.marginLeft.slice(0, -2);
    
    // Small Plane Distance
    smallPlane.style.marginLeft = newNumber2 + 'px';
    number2 = newNumber2;
    smallPlaneDistance = smallPlane.style.marginLeft.slice(0, -2);
    
    // Establish Length of Race, who the winner is...
        if (bigPlaneDistance <= width - 150)
        {
            planeWinner.style.display = 'inline';
            // notify user of the winning plane...
            window.alert("The Big Plane is the winner of the Flight!");
        }
        else if (smallPlaneDistance >= width - 150)
        {
            document.getElementById("smallPlane").src = "cis370Finalproject/slowPlane.jpg";
            planeWinner.style.display = 'inline';
            // notify user of the winning plane...
            window.alert("The Small Plane is the winner of the flight!");
        }
        // begin race if there's not a winner...
        else
        {
            beginRace();
        }
    }, 500);
}

// Reset the positions of planes and their respective numbers, variables...
    
function resetRace()
{
    number = 0;
    newNumber = 0;
    number2 = 0;
    newNumber2 = 0;
    bigPlane.style.marginLeft = 0;
    smallPlane.style.marginLeft = 0;
    bigPlaneDistance = 0;
    smallPlaneDistance = 0;
    image.src = "cis370Finalproject/startButton.jpg";
}