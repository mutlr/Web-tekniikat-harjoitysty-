
const Player = (marker) => {
    let score = 0;
    const returnMarker = () => marker;
    const increaseScore = () => score++;
    const returnScore = () => {
        increaseScore();
        return score;
    }
    return {returnMarker, returnScore};
}

const playerX = Player("X");
const playerO = Player("O");

let count = 0;
let currentPlayer;
const gameboard = ["", "", "", "", "", "", "", "", ""];

function makeBoard() {
    let index = 0
    const gameContainer = document.querySelector(".game-container");
    for (let i = 0; i < 3; i++) {
        const row = makeElement("div", "row");
        for (let j = 0; j < 3; j++) {
            let el = makeElement("div", "box", "");
            el.setAttribute("data-index", index++);
            row.append(el);
            el.addEventListener("click", (e) => {
                addToBox(e);
                const winnerValue = winner(currentPlayer);
                if (winnerValue === true || winnerValue === 1) {
                    winnerScreen(winnerValue, currentPlayer);
                } else {
                    switchPlayers();
                }
            }, {once: true});
        }
        gameContainer.append(row);
    }
}
function restart() {
    gameboard.fill("", 0, 9);
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        document.querySelector(".game-container").removeChild(row);
    })
}
function makeElement (type, classname, text) {
    const el = document.createElement(type);
    el.className = classname;
    el.textContent = text;
    return el;
}
function start() {
    currentPlayer = playerX;
    restart();
    makeBoard();
    count = 0;
}
function winnerScreen(value, player) {
    document.querySelector(".winscreen").classList.remove("display");
    if (value === 1) {
        document.querySelector(".tie").classList.remove("display");
    } else {
        document.querySelector(".win").classList.remove("display");
        document.getElementById("winnerText").textContent = player.returnMarker();
        document.getElementById(player.returnMarker()).textContent = player.returnScore();
    }
    document.getElementById("newGame").addEventListener("click", () => {
        document.querySelector(".winscreen").classList.add("display");
        document.querySelector(".win").classList.add("display");
        document.querySelector(".tie").classList.add("display");
        start();
    });
}


function winner() {
    const marker = currentPlayer.returnMarker();
    if (gameboard[0] === marker && gameboard[1] === marker && gameboard[2] === marker) {
        return true;
    } else if (gameboard[3] === marker && gameboard[4] === marker && gameboard[5] === marker) {
        return true;
    } else if (gameboard[6] === marker && gameboard[7] === marker && gameboard[8] === marker) {
        return true;
    } else if (gameboard[0] === marker && gameboard[4] === marker && gameboard[8] === marker) {
        return true;
    } else if (gameboard[6] === marker && gameboard[2] === marker && gameboard[4] === marker) {
        return true;
    } else if (gameboard[0] === marker && gameboard[3] === marker && gameboard[6] === marker) {
        return true;
    } else if (gameboard[1] === marker && gameboard[4] === marker && gameboard[7] === marker) {
        return true;
    } else if (gameboard[2] === marker && gameboard[5] === marker && gameboard[8] === marker) {
        return true;
    }
    if (!gameboard.includes("")) {
        return 1;
    }
    return false;
}

function addToBox(e) {
    e.target.textContent = currentPlayer.returnMarker();
    gameboard[e.target.dataset.index] = currentPlayer.returnMarker();
}
function switchPlayers() {
    if (currentPlayer === playerX) {
        currentPlayer = playerO;
        return
    }
    currentPlayer = playerX;
}

window.onload = start();
document.getElementById("restartBtn").addEventListener("click", start);