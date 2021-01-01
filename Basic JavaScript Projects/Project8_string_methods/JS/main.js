function full_Sentence() {                                   //using "concat" to concatenate and display  parts of a whole sentence
    var part_1 = "This ";
    var part_2 = "is a ";
    var part_3 = "complete concatenated ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method () {                                  //utilize the "slice" method to only display Johnny
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Function() {                                 //utilize the "toUppercase" method
    var str = "sorry caps!";
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}

function search_Function() {                               //using search method to search for "Whats"
    var str = "Hey Whats Up?";
    var n = str.search("Whats");
    document.getElementById("Search").innerHTML = n;
}

function string_Method() {                                  //utilize the "toString" method on some numbers
    var x = 777;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {                                //utlize "precision" method
    var x = 11779.10169776541;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function fixed_Function() {                                  //utilize "toFixed" method
    var num = 7.71174;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}
