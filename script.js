const squares= document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score= document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');

let hitPosition;
let result = 0;
let currentTime = 30;
let timerId = null;

function randomSquare()
{
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
    console.log(randomSquare);

    hitPosition = randomSquare.id;
}


squares.forEach(square =>{
    square.addEventListener('mousedown',() => {
        if (square.id === hitPosition ){
            result++;
            score.textContent = result;
            hitPosition = null; 
        }
    })
})


function moveMole()
{
    timerId = setInterval(randomSquare,1000);
}

function countDown()
{
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0)
    {
        timeLeft.textContent = 0;
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER !!! Your final score is ' + result);
    }
}


moveMole();
let countDownTimerId = setInterval(countDown,1000);