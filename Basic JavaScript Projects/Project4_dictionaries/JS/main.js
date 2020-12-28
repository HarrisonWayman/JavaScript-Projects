function my_Dictionary() {          //defining function and naming it
    var Pet = {                     //creates KVP dictionary
        Species:"Dog",
        Color:"White",
        Breed:"American Bulldog",
        Age:5,
        Sound:"Bark!"
    };
    delete Pet.Age;         // delete operator used as word  on library key age
    document.getElementById("Dictionary1").innerHTML = Pet.Age      //outputs value of my dictionary specified
    document.getElementById("Dictionary").innerHTML = Pet.Sound
}