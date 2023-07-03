import { type VitePWAOptions } from 'vite-plugin-pwa'

export const manifest: Partial<VitePWAOptions> = {
	registerType: 'prompt',
	includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
	manifest: {
		name: 'Music-List',
		short_name: 'Music-List',
		description: 'Music-List is a collection of music available on your device',
		icons: [
			{
				src: 'images/apple-splash-640-1136.jpg',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: 'images/apple-splash-750-1334.jpg',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: 'images/apple-splash-828-1792.jpg',
				sizes: '180x180',
				type: 'image/png',
				purpose: 'apple touch icon',
			},
			{
				src: 'images/apple-splash-1125-2436.jpg',
				sizes: '225x225',
				type: 'image/png',
				purpose: 'any maskable',
			},
		],
		theme_color: '#ffffff',
		background_color: '#ffffff',
		display: 'standalone',
		start_url: '.',
		orientation: 'portrait',
		launch_handler: {
			client_mode: 'navigate-new',
		},
	},
}
