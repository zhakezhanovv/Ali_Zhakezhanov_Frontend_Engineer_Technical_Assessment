import cn from 'classnames'
import { type HTMLProps, type ReactNode } from 'react'

import styles from './styles.module.scss'

interface Layout {
	App: typeof AppLayout
	Header: typeof HeaderLayout
	Main: typeof MainLayout
	Footer: typeof FooterLayout
	Container: typeof ContainerLayout
	Section: typeof SectionLayout
}

interface AppLayoutProps extends HTMLProps<HTMLDivElement> {
	children: ReactNode
	className?: string
}

interface HeaderLayoutProps extends HTMLProps<HTMLElement> {
	children: ReactNode
	className?: string
}

interface MainLayoutProps extends HTMLProps<HTMLElement> {
	children: ReactNode
	className?: string
}

interface FooterLayoutProps extends HTMLProps<HTMLElement> {
	children: ReactNode
	className?: string
}

interface ContainerLayoutProps extends HTMLProps<HTMLDivElement> {
	children: ReactNode
	className?: string
}

interface SectionLayoutProps extends HTMLProps<HTMLElement> {
	children: ReactNode
	className?: string
}

function AppLayout(props: AppLayoutProps) {
	const { children, className, ...other } = props

	return (
		<div className={cn(styles.app, className)} {...other}>
			{children}
		</div>
	)
}

function HeaderLayout(props: HeaderLayoutProps) {
	const { children, className, ...other } = props

	return (
		<header className={cn(styles.header, className)} {...other}>
			{children}
		</header>
	)
}

function MainLayout(props: MainLayoutProps) {
	const { children, className, ...other } = props

	return (
		<main className={cn(styles.main, className)} {...other}>
			{children}
		</main>
	)
}

function FooterLayout(props: FooterLayoutProps) {
	const { children, className, ...other } = props

	return (
		<footer className={cn(styles.footer, className)} {...other}>
			{children}
		</footer>
	)
}

function ContainerLayout(props: ContainerLayoutProps) {
	const { children, className, ...other } = props

	return (
		<div className={cn(styles.container, className)} {...other}>
			{children}
		</div>
	)
}

function SectionLayout(props: SectionLayoutProps) {
	const { children, className, ...other } = props

	return (
		<section className={cn(styles.section, className)} {...other}>
			{children}
		</section>
	)
}

export const Layout: Layout = {
	App: AppLayout,
	Header: HeaderLayout,
	Main: MainLayout,
	Footer: FooterLayout,
	Container: ContainerLayout,
	Section: SectionLayout,
}
