/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MusicCard } from '@/entities/music'
import { type MusicResponse } from '@/shared/api'
import { Layout } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/store'
import { setModal } from '@/store/modal'
import { fetchMusics, setIsPlayMusic, setSelectMusic } from '@/store/music'
import { BottomPlayer } from '@/widgets/bottom_player'
import { Header } from '@/widgets/header'
// import cn from 'classnames'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import styles from './styles.module.scss'
import { pauseAudio, playAudio, resumeAudio } from './utils'

export function MainPage() {
	const { musics, selectMusic, isPlaying } = useAppSelector((state) => state.music)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchMusics() as any)
	}, [])

	function handleMusicPayerClick(music: MusicResponse) {
		if (selectMusic?.trackId === music.trackId && isPlaying) {
			pauseAudio()
		} else if (selectMusic?.trackId === music.trackId && !isPlaying) {
			resumeAudio()
		} else {
			pauseAudio()
			playAudio(music.previewUrl)
		}

		dispatch(setSelectMusic(music))
		if (selectMusic?.trackId === music.trackId) {
			dispatch(setIsPlayMusic(!isPlaying))
		} else {
			dispatch(setIsPlayMusic(true))
		}
	}

	function handleMusicMoreClick(music: MusicResponse) {
		dispatch(setSelectMusic(music))
		dispatch(setModal('music-details'))
	}

	return (
		<>
			<Helmet>
				<title>Music-List</title>
			</Helmet>
			<Header />
			<Layout.Main>
				<Layout.Section className={styles.main_section}>
					<Layout.Container>
						<div className={styles.main_section__musics}>
							<div className={styles.main_section__musics__content}>
								{musics.map((music, index) => (
									<MusicCard
										key={index}
										image={music.artworkUrl100}
										name={music.trackName}
										artistName={music.artistName}
										isPlaying={selectMusic?.trackId === music.trackId && isPlaying}
										onPlayerClick={() => handleMusicPayerClick(music)}
										onMoreClick={() => handleMusicMoreClick(music)}
									/>
								))}
							</div>
						</div>
					</Layout.Container>
				</Layout.Section>
			</Layout.Main>

			<BottomPlayer />
		</>
	)
}
