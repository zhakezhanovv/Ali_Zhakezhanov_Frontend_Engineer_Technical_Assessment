/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Card } from '@/shared/ui'
import cn from 'classnames'
import { type HTMLProps, type ReactNode } from 'react'

import styles from './styles.module.scss'

interface MusicCardProps extends HTMLProps<HTMLDivElement> {
	children?: ReactNode
	className?: string
	color?: 'primary' | 'secondary' | 'white'
	isPlaying?: boolean
	image: string
	name: string
	artistName: string
	onPlayerClick?: () => void
	onMoreClick?: () => void
}

export function MusicCard(props: MusicCardProps) {
	const {
		children,
		className,
		color = 'primary',
		isPlaying,
		image,
		name,
		artistName,
		onPlayerClick,
		onMoreClick,
		...other
	} = props
	const hasIsPlaying = isPlaying === undefined ? null : isPlaying

	return (
		<div className={styles.music_card__wrapper}>
			<Card className={cn(styles.music_card, className)} color={color} {...other}>
				<div className={styles.music_card__player} onClick={onPlayerClick}>
					<img src={image} alt='' className={styles.music_card__player__artwork} />
					<span className={styles.music_card__player__button} data-play={hasIsPlaying} />
				</div>
				<img src={image} alt='' className={styles.music_card__artwork_back} onClick={onMoreClick} />
			</Card>
			<div className={styles.music_card__description}>
				<h1 className={styles.music_card__description__title}>{name}</h1>
				<h1 className={styles.music_card__description__author}>{artistName}</h1>
			</div>
		</div>
	)
}
