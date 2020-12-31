var x = 20;                         //this is a global variable
function Add_numbers_1(){           //adding function to global variable
    document.write(20 + x + "<br>")
}
function Add_numbers_2(){
    document.write(x + 100 + "<br>");
}
Add_numbers_1();                   //diplays results
Add_numbers_2();

function Add_number_3() {           //this is a local variable
    var y = 15;
    document.write(30 + y + "<br>")
}
function Add_number_4() {           //undefinded variable to de-bug in dev-tools. "Y is not defined"
    console.log(25 + y);
}
Add_number_3();
Add_number_4();

function get_Date() {                                 //create function that utilizes newdate/gethours method
    if (new Date().getHours() < 18) {                         //utilize a conditional statement to display greeting 
        document.getElementById("Hello").innerHTML= "How are you today?";           //utilize "getElementById" method 
    }
}

function myFunction() {                         //create a function using "If", "Else" and "Else" that changes the greeting message based on the current time 
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good Morning!";
    } else if (time <20) {
        greeting = "Good Day!";
    } else {
        greeting = "Good evening!";
    }
    document.getElementById("greetings").innerHTML = greeting;
}

function Club_Function() {                          //create function that utilizes "if/else"
    age = document.getElementById("age").value;     //retreives the age input
    if (age >= 21) {                                //"if" statment checks if age is 21 or above
        Bounce = "Get this man a drink!";
    }
    else {                                          //"else" statment for ages under 21 years
        Bounce = "Nice try, Kick rocks buddy"
    }
    document.getElementById("Club").innerHTML = Bounce;     //returns message stating if you can enter the club or not
}

function Time_Function() {                          //this function pulls the time from computer and tells you what time of the day it is
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}