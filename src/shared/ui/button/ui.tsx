import cn from 'classnames'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	className?: string
	variant?: 'button' | 'text'
	color?: 'primary' | 'secondary'
	size?: 'xl' | 'md' | 'sm' | 'auto'
}

export function Button(props: ButtonProps) {
	const { children, className, variant = 'button', color = 'primary', size = 'auto', ...other } = props

	return (
		<button
			className={cn(styles.button, className)}
			data-variant={variant}
			data-color={color}
			data-size={size}
			{...other}
		>
			{children}
		</button>
	)
}
