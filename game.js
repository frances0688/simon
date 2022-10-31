const colors = ['red', 'blue', 'yellow', 'green'];
let randomColors = [getRandomColor()];
let playerColors = [];
let score = 0;

const lost = 'Try again, loser!';
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const greenBtn = document.getElementById('green');
const yellowBtn = document.getElementById('yellow');
const startBtn = document.getElementById('start');

redBtn.addEventListener('click', createPlayerArray);
blueBtn.addEventListener('click', createPlayerArray);
greenBtn.addEventListener('click', createPlayerArray);
yellowBtn.addEventListener('click', createPlayerArray);
startBtn.addEventListener('click', displayRandomColors);

console.log(randomColors);


function displayRandomColors() {
    for (let color of randomColors) {
        switch (color) {
            case 'red':
                redBtn.setAttribute(':active', true);
            case 'blue':
                blueBtn.setAttribute(':active', true);
            case 'green':
                greenBtn.setAttribute(':active', true);
            case 'yellow':
                yellowBtn.setAttribute(':active', true);
        }
    }
}


function createPlayerArray(event) {
    
    switch (event.target) {
        case redBtn:
            playerColors.push('red');

        case blueBtn:
            playerColors.push('blue');

        case greenBtn:
            playerColors.push('green');

        case yellowBtn:
            playerColors.push('yellow');
    }
    compareArrays();
}


function compareArrays () {
    for (let i=0; i<randomColors.length; i++) {
        if (randomColors[i] !== playerColors[i]) {
            return displayMessage(lost)
        }
        score += 1;
        document.querySelector('h1 span').innerText = score;
    } 
    if (randomColors.length === playerColors.length){
        playerColors = [];
        addNewRandomColor();
        displayRandomColors();
    }
    
    console.log(randomColors)
}


function getRandomColor() {
    return  colors[Math.floor(Math.random() * colors.length)];   
}


function addNewRandomColor () {
    return randomColors.push(getRandomColor());
}


function displayMessage () {
    console.log(lost);
}











  
  
  
  