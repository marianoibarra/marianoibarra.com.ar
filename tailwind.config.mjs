import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["selector", "[data-theme='dark']"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Nunito", ...defaultTheme.fontFamily.sans],
			mono: ["FiraCode", ...defaultTheme.fontFamily.mono],
		},
		extend: {
			textColor: {
				app: {
					/** primary color, links, buttons */
					primary: withOpacity("--text-primary"),
					/** accent color, links, buttons */
					accent: withOpacity("--text-accent"),
					/**	page titles, subheadings, emphasized fields */
					strong: withOpacity("--text-strong"),
					/**	body text, descriptions, and general content */
					neutral: withOpacity("--text-neutral"),
					/** light color, icons */
					light: withOpacity("--text-light"),
					/** lighter color, icons */
					lighter: withOpacity("--text-lighter"),
					/** dim color, placeholder, disabled text */
					lightest: withOpacity("--text-lightest"),
					/**	inverted color of the foreground */
					invert: withOpacity("--text-invert"),
				}
			},
			backgroundColor: {
				app: {
					base: withOpacity("--bg-base"),
					accent: withOpacity("--text-accent"),
					card: withOpacity("--bg-card"),
					"card-muted": withOpacity("--bg-card-muted"),
				}
			},
			outlineColor: {
				app: {
					primary: withOpacity("--text-primary"),
					accent: withOpacity("--text-accent"),
					neutral: withOpacity("--frame"),
					light: "rgba(var(--frame-light), 0.2)",
					lighter: "rgba(var(--frame-lighter), 0.16)",
					lightest: "rgba(var(--frame-lightest), 0.12)",
				}
			},
			borderColor: {
				app: {
					primary: withOpacity("--text-primary"),
					accent: withOpacity("--text-accent"),
					neutral: withOpacity("--frame"),
					light: "rgba(var(--frame), 0.2)",
					lighter: "rgba(var(--frame), 0.16)",
					lightest: "rgba(var(--frame), 0.12)",
				},
			},
			stroke: {
				app: {
					accent: withOpacity("--text-accent")
				}
			},
			fill: {
        app: {
          neutral: withOpacity("--text-neutral"),
          strong: withOpacity("--text-strong"),
          primary: withOpacity("--text-primary"),
          accent: withOpacity("--text-accent"),
        },
        transparent: "transparent",
      },
			spacing: {
				"8xl": "90rem",
			}
		},
	},
	plugins: [
		typography,
		containerQueries,
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