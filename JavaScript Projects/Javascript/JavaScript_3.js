function displayType(char) {
    var charType = char.getAttribute("data-char-type");
    alert(charType + " is a character from " + char.innerHTML);
}