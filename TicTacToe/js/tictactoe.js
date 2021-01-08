let activePlayer = 'X';             //let variable keeps track of turns
let selectedSquares = [];          //array stores an array of possible moves

function placeXOrO(squareNumber) {                                                      //function places and X or O in a square
    if (!selectedSquares.some(element => element.includes(squareNumber))) {            //condition ensures a square hasn't been selected already
        let select = document.getElementById(squareNumber);                           //this variable retrieves the html element id that was clicked on 
        if (activePlayer === 'X') {                                                  //this condition checks whos turn it currently is
            select.style.backgroundImage = 'url("images/x.png")';                   //if activeplayer is = "X" the x.png image is placed in html
        } else {                                                                   //activeplayer must be X or O
            select.style.backgroundImage = 'url("images/o.png")';          
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();                                                //this calls a function to to check for win conditions
        if (activePlayer === 'X') {                                        //this is a condition for changing players
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio('./media/place.mp3');                                             //this function plays placement sound when triggered 
        if (activePlayer ==='O') {                                            //this condition checks to see if its the computers turn to play
            disableClick();                                                 //this function disables clicking for the computers turn
            setTimeout(function (){ computersTurn();}, 1000);             //this function waits 1 second before placing the image and enabling clicking
        }
        return true;                                                          //returning true is needed for computerTurn() to play
    }
    function computersTurn() {                                              //this function results in a random square being selected       
        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

function checkWinConditions() {                                                     //this function parses selectedSquares for any win conditions and draws line if the conditions are met
    if  (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520);}
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520);}
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }
    function arrayIncludes(squareA, squareB, squareC) {                                                 //checks for any win condition in selected squares 
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}

function disableClick() {                                           //function makes the body elements temporarily unclickable by user
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

function audio(audioURL) {                                      //function sets the path for placement mp3 sounds
    let audio = new Audio(audioURL);
    audio.play();
}


function drawWinLine(coordX1, coordY1, coordX2, coordY2)    {           //function utilizes html canvas to draw win lines on squares
    const canvas = document.getElementById('win-lines');            
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    
    function animateLineDrawing() {                                      //function interacts with html canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStlye = 'rgba(70, 255, 33, .8)';                                 //function utilizes html canvas to draw win lines on squares
        function drawWinLine(coordX1, coordY1, coordX2, coordY2)    {
            const canvas = document.getElementById('win-lines');            
            const c = canvas.getContext('2d');
            let x1 = coordX1,
                y1 = coordY1,
                x2 = coordX2,
                y2 = coordY2,
                x = x1,
                y = y1;
            
            function animateLineDrawing() {                                  //function interacts with html canvas
                const animationLoop = requestAnimationFrame(animateLineDrawing);
                c.clearRect(0, 0, 608, 608);
                c.beginPath();
                c.moveTo(x1, y1);
                c.lineTo(x, y);
                c.lineWidth = 10;
                c.strokeStlye = 'rgba(70, 255, 33, .8)';
                c.stroke();
                if (x1 <= x2 && y1 <= y2)   {                       //condition checks for endpoint 
                    if (x < x2) { x += 10; }
                    if (y < y2) { y += 10; }
                    if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        
                }
                if (x1 <= x2 && y1 >= y2)   {                       // This conditon is for the 6,4,2 for any win condition
                    if (x < x2) { x += 10; }
                    if (y > y2) {y -= 10; }
                    if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
                }
            }
            function clear() {                                      //function clears the canvas after win line is drawn
                const animationLoop = requestAnimationFrame(clear);
                c.clearRect(0, 0, 608, 608);
                cancelAnimationFrame(animationLoop);
            }
            disableClick();                                             //disables clicking while win sound is playing
            audio('./media/winGame.mp3');                               //plays win sound
            animateLineDrawing();
            setTimeout(function () { clear(); resetGame(); }, 1000);
        }
        
        c.stroke();
        if (x1 <= x2 && y1 <= y2)   {                       //condition checks for endpoint
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }

        }
        if (x1 <= x2 && y1 >= y2)   {                       //6,4,2 win condition
            if (x < x2) { x += 10; }
            if (y > y2) {y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
        }
    }
    function clear() {                                      //function clears the canvas after win line is drawn
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();                                             //this line disables clicking while the win sound is playing
    audio('./media/winGame.mp3');                               //plays win sound
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() {                                          //function resets the game after a win or tie
    for (let i =0; i<9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}