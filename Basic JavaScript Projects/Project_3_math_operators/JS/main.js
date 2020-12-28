function Add_Funct() {          //adds 7 + 7 and displays the result when event is triggered (Clicked)
    var addition = 7+7;
    document.getElementById("Math").innerHTML= addition;
}

function Subtr_Funct() {            //adds 7 + 7 and displays the result when event is triggered (Clicked)
    var Subtraction = 14-7;
    document.getElementById("Math2").innerHTML= Subtraction;
}

function Multi_Funct() {            //multiplies 7 by 7 and displays the result when event is triggered (Clicked)
    var simple_Math= 7*7;
    document.getElementById("Math3").innerHTML=simple_Math;
}

function Div_Funct() {              //divides 49 by 7 and displays the result when event is triggered (Clicked)
    var simple_Math= 49/7;
    document.getElementById("Math4").innerHTML=simple_Math
}

function Multi_Math_Ops() {         //fucntion performs mutilpe math operations  and displays the sum when event is triggered (Clicked)
    var simple_Math = (7+7)*14/10-5;
    document.getElementById("Math5").innerHTML= simple_Math;
}

function Modulus_Op() {             //takes remainder of division operation and displays the result when event is triggered (Clicked)
    var simple_math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you Divide 25 by 6 you have a remainder of;" + simple_math;
}

function Negt_Op() {            //takes value of x and displays the  negative result when event is triggered (Clicked)
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function Inc_Op() {             //increments 1 on 5 and displays the result when event is triggered (Clicked)
    var y = 5;
    y++;
    document.getElementById("Math8").innerHTML = y;
}

function Dec_Op() {             //decrements 1 from 5 and displays the result when event is triggered (Clicked)
    var z = 5;
    z--;
    document.getElementById("Math9").innerHTML = z;
}

function roll20() {             //fucntion rolls through random numbers 1-20 and displays the number when event is triggered (Clicked)                        
    var d20Result = document.getElementById("20Result");
    var d20 = Math.floor(Math.random()*20+1);
      d20Result.innerHTML = d20;
    }