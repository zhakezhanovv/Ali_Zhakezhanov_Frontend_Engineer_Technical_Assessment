export const audioElement = new Audio()
export let duration = 0

export function playAudio(audioUrl: string) {
	if (!audioElement.paused) {
		audioElement.pause()
	}

	audioElement.src = audioUrl

	audioElement.addEventListener('loadedmetadata', () => {
		duration = audioElement.duration
	})

	setTimeout(() => {
		audioElement.play()
	}, 100)
}

export function pauseAudio() {
	if (!audioElement.paused) {
		audioElement.pause()
	}
}

export function resumeAudio() {
	if (audioElement.paused) {
		audioElement.play()
	}
}
