function Game_Function() {                                        //defining my function
    var Game_Output;                                              //creating variable to return  my function
    var Games = document.getElementById("Game_Input").value;
    var Game_String = " is a great game!";
    switch(Games) {                                               //utilizing switch statement to create possible matches 
        case "Call of Duty":
            Game_Output = "Call of Duty" + Game_String;
        break;
        case "Halo":
            Game_Output = "Halo" + Game_String;
        break;
        case "Final Fantasy":
            Game_Output = "Final Fantasy" + Game_String;
        break;
        case "Zelda":
            Game_Output = "Zelda" + Game_String;
        break;
        case "Pac Man":
            Game_Output = "Pac Man" + Game_String;
        break;
        case "Super Smash Bros":
            Game_Output = "Super Smash bros" + Game_String;
        break;
        default:
            Game_Output = "Please enter an Animal name exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Game_Output;            //returning the result of the user
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");                   //utilizing getElementsByClassName 
    A[0].innerHTML = "The text has changed";                            //set index of variable A to "0" to display the first element with the class "click"
}

                                                
var C = document.getElementById("ID_Name");         //using Javascript within html canvas to draw a circle
var ctx = C.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

var C = document.getElementById("ID_Name1");        //adding linear gradient
var ctx = C.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);