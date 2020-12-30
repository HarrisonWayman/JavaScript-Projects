document.write(typeof "word" + "<br>");              //using "typeof" operator

document.write(typeof 3 + "<br>");               //using "typeof" operator

document.write(2E310 + "<br>");              //displays infinity

document.write(-3E310 + "<br>");           //display -infinity

document.write(10>5);                   //boolean Logic=True

document.write(10<2);               //boolean Logic=False

console.log(7+7);                            //console.log addition function
console.log(10<2);                          //console.log Boolean logic=False
document.write("7" + 11);                  //demonstrates coercion, outputs="711"
document.write(10==10 );                  //using equal to operator "true"
document.write(10==2);                   //using equal to operator "false"

function my_Function1() {                 //defining the function 1
    document.getElementById("Test1").innerHTML = 0/0;                                  //testing NaN
}

function my_Function2() {                //defining the function 2
    document.getElementById("Test2").innerHTML = isNaN('This is a string');           //testing NaN
}

function my_Function3() {                //defining the function 3
    document.getElementById("Test3").innerHTML = isNaN('007');                       //testing NaN
}

function my_Function4() {                //defining the function 4
    x = 10
    y = 10
    document.getElementById("Test4").innerHTML = (x===y) //utilize 3x "===" equal to check data
}

function my_Function5() {                //defining the function 5
    x = "10"
    y = 12
    document.getElementById("Test5").innerHTML = (x===y) //utilize 3x "===" equal to check data
}

function my_Function6() {                //defining the function 6
    x = "10"
    y = 10
    document.getElementById("Test6").innerHTML = (x===y) //utilize 3x "===" equal to check data
}

function my_Function7() {                //defining the function 7
    x = "word"
    y = "not same"
    document.getElementById("Test7").innerHTML = (x===y) //utilize 3x "===" equal to check data
}

function and_Function () {
    document.getElementById("Test8").innerHTML = document.write(6>4 && 8>4), document.write(6<4 && 8>4);  //utilize "AND" operator to display true and fasle
}

function or_Function() {
    document.getElementById("Test9").innerHTML = document.write(6>9 || 6>5), document.write(6>9 || 6<4); //utilize "OR" operator to display true and false
}

function not_Function1() {
    document.getElementById("Test10").innerHTML= !(30>15);                  //utilize "NOT" operator to display false
}

function not_Function2() {
    document.getElementById("Test11").innerHTML= !(5>15);                   //utilize "NOT" operator to display true
}