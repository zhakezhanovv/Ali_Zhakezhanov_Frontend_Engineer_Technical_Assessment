import cn from 'classnames'
import { type HTMLProps, type ReactNode } from 'react'

import styles from './styles.module.scss'

interface CardProps extends HTMLProps<HTMLDivElement> {
	children: ReactNode
	className?: string
	variant?: 'default' | 'outlined'
	color?: 'white' | 'primary' | 'secondary'
}

export function Card(props: CardProps) {
	const { children, className, variant = 'default', color = 'white', ...other } = props

	return (
		<div className={cn(styles.card, className)} {...other} data-variant={variant} data-color={color}>
			{children}
		</div>
	)
}
