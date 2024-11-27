
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["selector", "[data-theme='dark']"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Nunito", ...require('tailwindcss/defaultTheme').fontFamily.sans],
			mono: ["FiraCode", ...require('tailwindcss/defaultTheme').fontFamily.mono],
		},
		extend: {
			textColor: {
				theme: {
					base: withOpacity("--color-foreground"),
					primary: withOpacity("--color-primary"),
					accent: withOpacity("--color-accent"),
					inverted: withOpacity("--color-background"),
				}
			},
			backgroundColor: {
				theme: {
					base: withOpacity("--color-background"),
					primary: withOpacity("--color-primary"),
					accent: withOpacity("--color-accent"),
					inverted: withOpacity("--color-foreground"),
					card: withOpacity("--color-card"),
					"card-muted": withOpacity("--color-card-muted"),
				}
			},
			outlineColor: {
				theme: {
					base: withOpacity("--color-border"),
					fill: withOpacity("--color-foreground"),
					primary: withOpacity("--color-accent"),
					accent: withOpacity("--color-accent"),
				}
			},
			borderColor: {
				theme: {
					base: withOpacity("--color-border"),
					fill: withOpacity("--color-foreground"),
					primary: withOpacity("--color-accent"),
					accent: withOpacity("--color-accent"),
				},
			},
			stroke: {
				theme: {
					accent: withOpacity("--color-accent")
				}
			},
			fill: {
        theme: {
          base: withOpacity("--color-foreground"),
          primary: withOpacity("--color-primary"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
			spacing: {
				"8xl": "90rem",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
	],
}

function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
}