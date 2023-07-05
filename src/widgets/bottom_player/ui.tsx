import { audioElement, duration, pauseAudio, resumeAudio } from '@/pages/main/utils'
import { type MusicResponse } from '@/shared/api'
import { PauseIcon, PlayIcon } from '@/shared/assets'
import { Button } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/store'
import { setIsPlayMusic } from '@/store/music'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

export function BottomPlayer() {
	const { selectMusic, isPlaying } = useAppSelector((state) => state.music)
	const [localSelectMusic, setLocalSelectMusic] = useState<MusicResponse | null>(null)
	// const [duration, setDuration] = useState<number>(0)
	const [currentTime, setCurrentTime] = useState<number>(0)
	const dispatch = useAppDispatch()

	useEffect(() => {
		setLocalSelectMusic(selectMusic)
	}, [selectMusic])

	useEffect(() => {
		const timeupdateHandler = () => {
			const currentTime = audioElement.currentTime

			setCurrentTime(currentTime)
		}

		if (audioElement) {
			audioElement.addEventListener('timeupdate', timeupdateHandler)
		}

		return () => {
			audioElement.removeEventListener('timeupdate', timeupdateHandler)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [audioElement])

	return (
		<aside className={styles.bottom_player}>
			<div className={styles.bottom_player__left}>
				<Button
					className={styles.bottom_player__left__button}
					variant='text'
					onClick={() => {
						if (isPlaying) {
							pauseAudio()
						} else {
							resumeAudio()
						}
						dispatch(setIsPlayMusic(!isPlaying))
					}}
				>
					<img src={isPlaying ? PauseIcon : PlayIcon} alt='' className={styles.bottom_player__left__button} />
				</Button>
				{selectMusic && (
					<>
						<img src={selectMusic?.artworkUrl100} alt='' width='40' height='40' />
						<h3>{localSelectMusic?.trackName}</h3>
					</>
				)}
			</div>
			<div>
				{audioElement && <>{duration.toFixed(2)}</>} / {audioElement && <>{currentTime.toFixed(2)}</>}
			</div>
		</aside>
	)
}
