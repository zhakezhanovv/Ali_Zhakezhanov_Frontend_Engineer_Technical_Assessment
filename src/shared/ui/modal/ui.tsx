/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CloseIcon } from '@/shared/assets'
import cn from 'classnames'
import { type HTMLProps, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

import styles from './styles.module.scss'

interface Modal {
	Container: typeof Container
	Overlay: typeof Overlay
	Content: typeof Content
}

interface ContainerProps extends HTMLProps<HTMLDivElement> {
	children?: ReactNode
	isOpen: boolean
	onClose: () => void
}

interface OverlayProps extends HTMLProps<HTMLDivElement> {
	children?: ReactNode
	onClose: () => void
}

interface ContentProps extends HTMLProps<HTMLDivElement> {
	hasClose?: boolean
	onClose?: () => void
}

function Container(props: ContainerProps) {
	const { children, className, isOpen, ...other } = props

	return createPortal(
		<div className={cn(styles.modal, className)} data-is-open={isOpen} {...other}>
			{children}
		</div>,
		document.getElementById('modal-root')!,
	)
}

function Overlay(props: OverlayProps) {
	const { onClose, className, ...other } = props

	return <div className={cn(styles.modal__overlay, className)} onClick={onClose} {...other} />
}

function Content(props: ContentProps) {
	const { children, className, hasClose = false, onClose, ...other } = props

	return (
		<div className={cn(styles.modal__content, className)} {...other}>
			{hasClose && <img className={styles.modal__content__close_button} src={CloseIcon} alt='' onClick={onClose} />}
			{children}
		</div>
	)
}

export const Modal: Modal = {
	Container,
	Overlay,
	Content,
}
