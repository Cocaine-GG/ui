const board = document.querySelector('#board')
const SQUARE_NUMBER = 600

for (let i = 0; i < SQUARE_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')
	board.append(square)
	square.addEventListener('mouseover', () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16)
		setColor(square, randomColor)
	})
	square.addEventListener('mouseleave', () => {
		removeColor(square)
	})
}

function setColor(el, randomColor) {
	el.style.background = `#${randomColor}`
	el.style.boxShadow = `0 0 2px #${randomColor},0 0 10px #${randomColor}`
}

function removeColor(el) {
	el.style.background = '#1d1d1d'
	el.style.boxShadow = `0 0 2px #000`
}
