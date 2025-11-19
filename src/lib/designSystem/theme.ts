import {
	createTheme,
	type PaletteOptions,
	type ThemeOptions,
} from "@mui/material/styles";

import { darkPalette, lightPalette } from "./palette";
import { tokens } from "./tokens";

const getThemeOptions = (palette: PaletteOptions): ThemeOptions => ({
	palette,
	spacing: 4,
	shape: {
		borderRadius: tokens.borderRadius.md,
	},
	typography: {
		fontFamily: tokens.fontFamily.primary,
		fontSize: 14,
		fontWeightLight: tokens.fontWeight.light,
		fontWeightRegular: tokens.fontWeight.regular,
		fontWeightMedium: tokens.fontWeight.medium,
		fontWeightBold: tokens.fontWeight.bold,
		h1: {
			fontSize: tokens.fontSize["5xl"],
			fontWeight: tokens.fontWeight.bold,
			lineHeight: 1.2,
		},
		h2: {
			fontSize: tokens.fontSize["4xl"],
			fontWeight: tokens.fontWeight.bold,
			lineHeight: 1.3,
		},
		h3: {
			fontSize: tokens.fontSize["3xl"],
			fontWeight: tokens.fontWeight.semibold,
			lineHeight: 1.4,
		},
		h4: {
			fontSize: tokens.fontSize["2xl"],
			fontWeight: tokens.fontWeight.semibold,
			lineHeight: 1.4,
		},
		h5: {
			fontSize: tokens.fontSize.xl,
			fontWeight: tokens.fontWeight.semibold,
			lineHeight: 1.5,
		},
		h6: {
			fontSize: tokens.fontSize.lg,
			fontWeight: tokens.fontWeight.semibold,
			lineHeight: 1.5,
		},
		body1: {
			fontSize: tokens.fontSize.base,
			lineHeight: 1.5,
		},
		body2: {
			fontSize: tokens.fontSize.sm,
			lineHeight: 1.43,
		},
		button: {
			textTransform: "none",
			fontWeight: tokens.fontWeight.semibold,
		},
	},
});

export const lightTheme = createTheme(getThemeOptions(lightPalette));
export const darkTheme = createTheme(getThemeOptions(darkPalette));
