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


// BLOCK MOVE
const childBlock = document.querySelector('.child_block');

const moveRight = (childBlock) => {
    let currentLeft = 0;

    const move = () => {
        if (currentLeft < 448) {
            currentLeft++
            childBlock.style.left = currentLeft + 'px'

            requestAnimationFrame(move);
        }
    }

    move()
}

moveRight(childBlock)
