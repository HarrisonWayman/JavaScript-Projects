function Call_Loop() {                  //utilizing a while loop to create a funciton which counts to 10
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X; X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length_Function() {            //utlizing the Length property on a string to determine how many characters are in the string 
    var str = "I'm a Gamer!";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute" ];         //array of instruments
var Content = "";
function for_Loop() {                                                       //creating a for loop that parses through the array and prints each instrument 
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {                                     //utilizing the values in my array to fill in a sentence value
    var Cat_Picture = [];
    Cat_Picture[0] = "eating";
    Cat_Picture[1] = "hunting";
    Cat_Picture[2] = "sleeping";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "," + " he is not " + Cat_Picture[1] + "!";           //utlizing get.ElementById method
}

function constant_Function() {                              //utlizing the const function to set a constant value
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "Red";
    Musical_Instrument.price = "$3200";
    document.getElementById("Constant").innerHTML = "The color of the " + Musical_Instrument.type + " is " + Musical_Instrument.color + "." + "It costs " + Musical_Instrument.price;
}

let x = 1;              //utilizing console.log to express a "let" statement
if (x === 1) {
    let x=2;
    console.log(x)  //expected output inside function = 2
}
console.log(x)   //expected output outside function = 1

function return_Function() {            //creating a function that returns the value of "pi" 
    return Math.PI;
}
document.getElementById("Math").innerHTML = return_Function();


let truck = {                           //creating an object using the "let" keyword 
    make: "Ford",
    model: "F150. ",
    year: "2019 ",
    color: "black ",
    description: function() {
        return "The truck is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Truck_Object").innerHTML = truck.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }            //utlizing "continue" statment. The function will skip counting number 3
  if(i===8) {break;}                    //utlizing "break" statment. The function will break off at number 8 and stop counting
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;