/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme"
import defaultColors from "tailwindcss/colors"
import plugin from "tailwindcss/plugin"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			screens: {
				"sm-mobile": "315px",
				desktop: "1020px",
				...defaultTheme.screens
			},
			keyframes: {
				"fadeIn": {
					'0%': { opacity: "0" },
					'100%': { opacity: "1" },
				},
				"fadeOut": {
					'0%': { opacity: "1" },
					'100%': { opacity: "0" },
				},
			},
			animation: {
				"fade-in": "fadeIn 0.2s ease-in-out",
				"fade-out": "fadeOut 0.2s ease-in-out"
			}
		},
		colors: {
			...defaultColors,
			transparent: "transparent",
			current: "currentColor",
			obscure: "#0B0D17",
			lile: "#D0D6F9",
		},
	},
	plugins: [plugin(function ({ addComponents, theme }) {
		addComponents({
			'.highlight': {
				color: theme('colors.rose.600'),
				'@apply dark:text-pink-500': {},
			}
		})
	})],
}
