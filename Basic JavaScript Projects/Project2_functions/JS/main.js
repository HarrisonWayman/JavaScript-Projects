function My_Second_Function() {              // defining a function and naming it
    var str = "This text is red";           //defining a variable and giving it a string value
                                           
    var result = str.fontcolor("red");      //using the fontcolor method on str variable

    document.getElementById("Red_Text").innerHTML = result;   //putting the value of result into HTML element "Red_Text" id
                                                           
}

function myFunction() {                     // defining a function and naming it
    var sentence = "haha ";                 //defining a variable and giving it a sentence value
    sentence += "made you look!";           //concatenates string on sentence value
    document.getElementById("Concatenate").innerHTML = sentence;            //putting value of sentence into HTML  Concatenate id
}


