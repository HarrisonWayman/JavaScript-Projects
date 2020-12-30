function Ride_Function() {              //this fucntion uses ternary operator on the height value to display outcome of height
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are to short":"You are tall enought";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {              //this fucntion uses ternary operator on users age input to display if you can vote
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 17) ? "You can vote!":"You are not old enough to vote.";
    document.getElementById("Vote").innerHTML= Can_vote;
}

function Vehicle (Make, Model, Year, Color) {                         //creates fucntion "vehicle" object constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML= "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Pet (Age, Breed, Color, Sound) {                           //this function is the object constructor for Pet
    this.Pet_Age = Age;
    this.Pet_Breed = Breed;
    this.Pet_Color = Color;
    this.Pet_Sound = Sound;
}
var Rufus = new Pet("5", "American Bully", "White", "Bark!");       //creates new instance of the class "Pet"
function myFunction2() {
    document.getElementById("New_and_This").innerHTML= "Rufus is a " + Rufus.Pet_Color +"-colored " + Rufus.Pet_Breed + ". He is " + Rufus.Pet_Age + " and goes " + Rufus.Pet_Sound + ".";
}

function myFunction3() {                                            //creates a nested function that subtracts 2 from 5
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 5;
        function Minus_Two() {Starting_point -= 2;}
        Minus_Two();
        return Starting_point;
    }
}