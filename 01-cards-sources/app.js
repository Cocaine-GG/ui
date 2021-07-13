function slider(activeSlide = 0) {
	const $slides = document.querySelectorAll('.slide')
	const $body = document.querySelector('body')

	$slides[activeSlide].classList.add('active')

	$slides.forEach(slide => {
		slide.addEventListener('click', () => {
			if (!slide.classList.contains('active')) {
				clearActiveClasses()
				randomBackgroundColor()
				slide.classList.add('active')
			}
		})
	})

	function clearActiveClasses() {
		$slides.forEach(slide => {
			slide.classList.remove('active')
		})
	}

	function randomBackgroundColor() {
		$body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`
	}
}

slider(1)
