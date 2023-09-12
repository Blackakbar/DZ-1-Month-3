// GMAIL VALIDATOR

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "VALID"
        gmailResult.style.color = "green"
    }else {
        gmailResult.innerHTML = "INVALID"
        gmailResult.style.color = "red"
    }
}


// MOVE BLOCK
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
    } else if (positionX === 448 && positionY < 448) {
        positionY++
        childBlock.style.top = `${positionY}px`
    } else if (positionX > 0 && positionY === 448) {
        positionX--
        childBlock.style.left = `${positionX}px`
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
    }
    setTimeout(move, 1)
}

move()

// STOP WATCH
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const interval = document.querySelector('#secondsS')

let intervalTime
let time = 0

function updateTimer() {
    interval.textContent = time
}

startButton.addEventListener('click', () => {
    if (!intervalTime) {
        intervalTime = setInterval(() => {
            time++
            updateTimer();
        }, 1000)
    }
})

stopButton.addEventListener('click', () => {
    clearInterval(intervalTime)
    intervalTime = null
})

resetButton.addEventListener('click', () => {
    clearInterval(intervalTime)
    intervalTime = null
    time = 0
    updateTimer()
})
