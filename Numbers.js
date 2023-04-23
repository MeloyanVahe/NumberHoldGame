'use strict'

let score0 = 0
let score1 = 0
let scores = [0, 0]
let currents = [0, 0]
let activePlayer = 0
const changePlayer = () => activePlayer = activePlayer - 1 < 0 ? 1 : 0

document.querySelector('.btn--start').addEventListener('click', function () {
    const num = Math.trunc((Math.random()) * 6 + 1)
    document.querySelector('.dice').innerHTML = num
    if (num === 1) {

        scores = [0, 0]
        document.getElementById(`score--${activePlayer}`).innerHTML = 0
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        changePlayer()
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active')

    } else {
        scores[activePlayer] += num
        document.getElementById(`score--${activePlayer}`).innerHTML = scores[activePlayer]
    }


})


document.querySelector('.btn--hold').addEventListener('click', function () {
    currents[activePlayer] += scores[activePlayer]
    if (currents[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector('.btn--hold').style.display = 'none'
        document.querySelector('.btn--start').style.display = 'none'
    }
    document.getElementById(`current--${activePlayer}`).innerHTML = currents[activePlayer]
    scores = [0, 0]
    document.getElementById(`score--${activePlayer}`).innerHTML = 0
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    changePlayer()
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
})


document.querySelector('.btn--new').addEventListener('click', function () {
    changePlayer()
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    activePlayer = 0
    scores = [0, 0]
    currents = [0, 0]
    document.querySelector('.dice').innerHTML = 0
    document.getElementById('score--0').innerHTML = 0
    document.getElementById('score--1').innerHTML = 0
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector('.player--0').classList.add('player--active')
    document.getElementById('current--0').innerHTML = 0
    document.getElementById('current--1').innerHTML = 0
    document.querySelector('.btn--hold').style.display = ''
    document.querySelector('.btn--start').style.display = ''



})