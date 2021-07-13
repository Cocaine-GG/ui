const $startBtn = document.querySelector('#start')
const $screens = document.querySelectorAll('.screen')
const $timeList = document.querySelector('#time-list')
const $timeElement = document.querySelector('#time')
const $board = document.querySelector('#board')
let interval = null
let time = 0
let score = 0

$startBtn.addEventListener('click', (e) => {
	e.preventDefault()
	$screens[0].classList.add('up')
})

$board.addEventListener('click', (e) => {
	if (e.target.classList.contains('circle')) {
		score++
		createRandomCircle()
		e.target.remove()
	}
	if (e.target.classList.contains('restart')) {
		restartGame(e.target)
	}
})

$timeList.addEventListener('click', (e) => {
	if (e.target.classList.contains('time-btn')) {
		time = parseInt(e.target.getAttribute('data-time'))
		$screens[1].classList.add('up')
		startGame(time)
	}
})

function startGame(time) {
	interval = setInterval(decreaseTime, 1000)
	createRandomCircle()
	$timeElement.innerHTML = `00:${time}`
}

function decreaseTime() {
	if (time === 0) {
		finishGame()
	} else {
		let current = --time
		if (current < 10) {
			current = `0${current}`
		}
		setTime(current)
	}
}

function setTime(current) {
	$timeElement.innerHTML = `00:${current}`
}

function finishGame() {
	$timeElement.parentNode.classList.add('hide')
	$board.innerHTML = `<div class="" style="display: flex; flex-direction: column; align-items: center;">
												<h1>Cчет : <span class="primary">${score}</span></h1>
												<i style="font-size: 2rem;" class="fas fa-redo-alt restart"></i>
											</div>`
	clearInterval(interval)
}

function createRandomCircle() {
	const circle = document.createElement('div')
	const size = getRandomNumber(10, 60)
	const {width, height} = $board.getBoundingClientRect()
	const x = getRandomNumber(0, width - size)
	const y = getRandomNumber(0, height - size)
	circle.classList.add('circle')
	circle.style.top = `${y}px`
	circle.style.left = `${x}px`
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`
	circle.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`
	$board.append(circle)
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function restartGame(el) {
	score = 0
	$timeElement.parentNode.classList.remove('hide')
	el.parentNode.remove()
	$screens[1].classList.remove('up')
}
