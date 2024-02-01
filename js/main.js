'use strict'

function onBallClick() {
    const elBall = document.querySelector('.ball')
    var size = +elBall.innerText + 50
    elBall.innerText = size
    elBall.style.width = size + 'px'
    elBall.style.height = size + 'px'

    if (size > 400) {
        size = 100
        elBall.innerText = size
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }
    elBall.style.background = getRandomColor()
}

function onBall1Click() {
    const elBall = document.querySelector('.ball1')
    var size = +elBall.innerText + 50
    elBall.innerText = size
    elBall.style.width = size + 'px'
    elBall.style.height = size + 'px'
    var maxDiameter = size
    if (maxDiameter > 300) {
        size = 100
        elBall.innerText = size
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }
}