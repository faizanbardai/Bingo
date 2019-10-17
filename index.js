window.onload = function () {
    createBingoArray();
    genBingoBoard();
};

//Create programmatically (with JS) a BINGO board with 76 cells, from 1 to 76.    
var bingoArray = [];
function createBingoArray() {
    for (i = 0; i < 75; i++) {
        bingoArray[i] = i + 1;
    };
};

function genBingoBoard() {
    var newUL = document.createElement("ul");
    bingoArray.forEach(function (e) {
        if (e % 6 == 0) {
            var newBreak = document.createElement("br");
            newUL.appendChild(newBreak);
        };
        var newLI = document.createElement("li");
        newLI.innerText = e;
        newLI.className = "bingoBoardNumber";
        newUL.appendChild(newLI);
    });
    document.querySelector("#bingoBoard").appendChild(newUL);
};

//Create a button to randomize a number from 1 to 76. The same number should be highlighted on the bingo board

//Take ALWAYS a new number (avoid randoming 10 3 times for example)

var numStillPresent = bingoArray;

function genRndNum() {

    if (numStillPresent.length > 0) {
        var rndNum = Math.floor(Math.random() * numStillPresent.length);
        var selectedNumber = numStillPresent[rndNum];
        document.querySelector("#newNum").innerText = selectedNumber;
        document.querySelectorAll(".bingoBoardNumber")
            .forEach((e) => parseInt(e.innerText) == selectedNumber ? e.classList.add("selected") : null);
        numStillPresent = numStillPresent.filter((e) => e != selectedNumber);
    } else {
        alert("all numbers are done.");
    };
};













