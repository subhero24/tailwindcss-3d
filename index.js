let plugin = require("tailwindcss/plugin");

let defaultOptions = {
	theme: {
		rotateX: {
			0: "0deg",
			1: "1deg",
			2: "2deg",
			3: "3deg",
			6: "6deg",
			12: "12deg",
			45: "45deg",
			90: "90deg",
			180: "180deg",
		},
		rotateY: {
			0: "0deg",
			1: "1deg",
			2: "2deg",
			3: "3deg",
			6: "6deg",
			12: "12deg",
			45: "45deg",
			90: "90deg",
			180: "180deg",
		},
	},
};

function ThreeDimensionsPlugin({ addBase, addUtilities, matchUtilities, theme }) {
	addBase({
		":root": {
			"--tw-rotate-x": 0,
			"--tw-rotate-y": 0,
		},
	});

	addUtilities({
		".flat": {
			"transform-style": "flat",
		},
		".3d": {
			"transform-style": "preserve-3d",
		},
	});

	addUtilities({
		".backface-visible": {
			"backface-visibility": "visible",
		},
		".backface-hidden": {
			"backface-visibility": "hidden",
		},
	});

	matchUtilities(
		{
			"rotate-x": (value) => ({
				"--tw-rotate-x": value,
				"transform":
					"translate(var(--tw-translate-x), var(--tw-translate-y)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
			}),
		},
		{ values: theme("rotateX"), supportsNegativeValues: true }
	);
	matchUtilities(
		{
			"rotate-y": (value) => ({
				"--tw-rotate-y": value,
				"transform":
					"translate(var(--tw-translate-x), var(--tw-translate-y)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
			}),
		},
		{ values: theme("rotateY"), supportsNegativeValues: true }
	);
}

module.exports = plugin(ThreeDimensionsPlugin, defaultOptions);
