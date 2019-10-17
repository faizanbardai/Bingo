window.onload = function () {
    createBingoArray();
    genBingoBoard();
    genUserBoard();
};

//Create programmatically (with JS) a BINGO board with 76 cells, from 1 to 76.    
var cell = 75;
var userCell = 25;
var bingoArray = [];
function createBingoArray() {
    for (i = 0; i < cell; i++) {
        bingoArray[i] = i + 1;
    };
};

function genBingoBoard() {
    var newUL = document.createElement("ul");
    bingoArray.forEach(function (e) {
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
        console.log("random number is: " + rndNum);
        var selectedNumber = numStillPresent[rndNum];
        console.log("For this index, the selected number is: " + selectedNumber);
        document.querySelector("#newNum").innerText = selectedNumber;
        document.querySelectorAll(".bingoBoardNumber")
            .forEach((e) => parseInt(e.innerText) == selectedNumber ? e.classList.add("selected") : null);
        numStillPresent = numStillPresent.filter((e) => e != selectedNumber);
        console.log(numStillPresent);
        console.log("no. of element left: " + numStillPresent.length);
    } else {
        alert("all numbers are done.");
    };
};

//Create a USER BOARD with random 24 numbers that highlights as the main board does

function genUserBoard() {
    var userBoardArrayIndex = [];
    for (i = 0; i < cell; i++) {
        userBoardArrayIndex[i] = i + 1;
    };
    console.log(userBoardArrayIndex);
    var numStillPresent = bingoArray;
    var userBoardArray = [];
    for (i = 0; i < userCell; i++) {
        var rndNum = Math.floor(Math.random() * numStillPresent.length);
        console.log("random number is " + rndNum);
        var selectedNumber = numStillPresent[rndNum];
        console.log("selected number is " + selectedNumber);
        numStillPresent = numStillPresent.filter((e) => e != selectedNumber);
        console.log(numStillPresent);
        userBoardArray.push(selectedNumber);
        console.log("user board array: " + userBoardArray);
    };
    var newUL = document.createElement("ul");
    userBoardArray.forEach((e) => {
        var newLI = document.createElement("li");
        newLI.innerText = e;
        newLI.className = "bingoBoardNumber";
        newUL.appendChild(newLI);
    });
    document.querySelector(".userBoard").appendChild(newUL);
};