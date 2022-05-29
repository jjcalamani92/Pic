module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		theme: {
			colors: {
				blue: "#1fb6ff",
				purple: "#7e5bef",
				pink: "#ff49db",
				orange: "#ff7849",
				green: "#13ce66",
				yellow: "#ffc82c",
				"gray-dark": "#273444",
				gray: "#8492a6",
				"gray-light": "#d3dce6"
			},
			fontFamily: {
				sans: ["Graphik", "sans-serif"],
				serif: ["Merriweather", "serif"]
			},
			extend: {
				spacing: {
					"8xl": "96rem",
					"9xl": "128rem"
				},
				borderRadius: {
					"4xl": "2rem"
				}
			}
		},
		extend: {
			colors: {
				primaryColor: "#F44336",
				darkPrimaryColor: "#D32F2F",
				lightPrimaryColor: "#FFCDD2",
				primaryText: "#212121",
				secondaryText: "#757575",
				accentColor: "#FF5252",
				backgroundColor: "#eee",
				dividerColor: "#BDBDBD",
				white: "#fff",
				black: "#000"
			}
		}
	},
	plugins: []
};
