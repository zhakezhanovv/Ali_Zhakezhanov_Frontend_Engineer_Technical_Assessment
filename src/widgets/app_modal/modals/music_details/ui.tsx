import { albumApi, type AlbumResponse } from '@/shared/api'
import { Card, Modal } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/store'
import { setModal } from '@/store/modal'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

interface Comment {
	value: string
	author: string
	createdAt: string
	updatedAt?: string
}

export function MusicDetailsContent() {
	const { selectMusic } = useAppSelector((state) => state.music)
	const [albums, setAlbums] = useState<Array<AlbumResponse>>([])
	const [comments, setComments] = useState<Array<Comment>>([])
	const [commentValue, setCommentValue] = useState<string>('')
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (selectMusic) {
			;(async () => {
				const albums = await albumApi.getAlbumsById({ id: selectMusic.artistId })
				setAlbums(albums.slice(1, 6))
			})()
		}
	}, [selectMusic])

	useEffect(() => {
		try {
			const commentsJSON = sessionStorage.getItem('comments') || ''
			if (commentsJSON !== '') {
				const comments = JSON.parse(commentsJSON)
				setComments(comments)
			}
		} catch (err) {
			console.log(err)
		}
	}, [])

	useEffect(() => {
		try {
			if (comments.length > 0) {
				const commentsJSON = JSON.stringify(comments)
				sessionStorage.setItem('comments', commentsJSON)
			}
		} catch (err) {
			console.log(err)
		}
	}, [comments])

	return (
		<Modal.Content className={styles.music_details__content} hasClose onClose={() => dispatch(setModal(null))}>
			{selectMusic && (
				<>
					<section className={styles.music_details__content__details}>
						<img className={styles.music_details__content__details__img} src={selectMusic.artworkUrl100} alt='' />
						<div className={styles.music_details__content__details__info}>
							<div className={styles.music_details__content__details__info__header}>
								<h1>{selectMusic.trackName}</h1>
								<h5>
									{selectMusic.trackPrice} {selectMusic.currency}
								</h5>
							</div>
							<div className={styles.music_details__content__details__info__link}>{selectMusic.artistName}</div>
							<div>Country: {selectMusic.country}</div>
							<div>Release Date: {new Date(selectMusic.releaseDate).toUTCString()}</div>
							<div>Collection Name: {selectMusic.collectionName}</div>
							<div>
								Collection Price: {selectMusic.collectionPrice} {selectMusic.currency}
							</div>
						</div>
					</section>
					<h2 className={styles.music_details__content__albums__title}>Albums:</h2>
					<section className={styles.music_details__content__albums}>
						{albums.map((album, index) => (
							<div key={index} className={styles.music_details__content__albums__card__wrapper}>
								<Card className={styles.music_details__content__albums__card}>
									<img src={album.artworkUrl100} alt='' className={styles.music_details__content__albums__card__back} />
								</Card>
								<h6>{album.collectionName}</h6>
							</div>
						))}
					</section>

					<h2 className={styles.music_details__content__albums__title}>Comments:</h2>
					<div className={styles.music_details__content__comments}>
						<textarea
							className={styles.music_details__content__comments__textarea}
							value={commentValue}
							onChange={(e) => setCommentValue(e.target.value)}
							placeholder='Enter comment'
							onKeyUp={(e) => {
								e.preventDefault()
								console.log(e.key)
								if (e.key === 'Enter') {
									const comment: Comment = {
										value: commentValue,
										author: 'You',
										createdAt: new Date().toUTCString(),
									}
									setComments((prev) => [...prev, comment])
									setCommentValue('')
								}
							}}
						/>
						<div className={styles.music_details__content__comments__content}>
							{comments.map((comment, index) => (
								<Card key={index} className={styles.music_details__content__comments__content__card}>
									<div>
										<span>{comment.author}: </span>
										<span>{comment.value}</span>
									</div>
									<span>{comment.createdAt}</span>
								</Card>
							))}
						</div>
					</div>
				</>
			)}
		</Modal.Content>
	)
}
