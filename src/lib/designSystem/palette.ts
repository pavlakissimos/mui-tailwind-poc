import type { PaletteOptions } from "@mui/material/styles";
import { semanticTokens, tokens } from "./tokens";

export const lightPalette: PaletteOptions = {
	mode: "light",
	primary: {
		light: tokens.colors.primary[300],
		main: tokens.colors.primary[500],
		dark: tokens.colors.primary[700],
		contrastText: tokens.colors.dark[900],
	},
	secondary: {
		light: tokens.colors.secondary[300],
		main: tokens.colors.secondary[500],
		dark: tokens.colors.secondary[700],
		contrastText: tokens.colors.dark[900],
	},
	error: {
		light: tokens.colors.error.light,
		main: tokens.colors.error.main,
		dark: tokens.colors.error.dark,
	},
	warning: {
		light: tokens.colors.warning.light,
		main: tokens.colors.warning.main,
		dark: tokens.colors.warning.dark,
	},
	info: {
		light: tokens.colors.info.light,
		main: tokens.colors.info.main,
		dark: tokens.colors.info.dark,
	},
	success: {
		light: tokens.colors.success.light,
		main: tokens.colors.success.main,
		dark: tokens.colors.success.dark,
	},
	grey: tokens.colors.grey,
	background: semanticTokens.light.background,
	text: semanticTokens.light.text,
};

export const darkPalette: PaletteOptions = {
	mode: "dark",
	primary: {
		light: tokens.colors.primary[300],
		main: tokens.colors.primary[500],
		dark: tokens.colors.primary[700],
		contrastText: tokens.colors.dark[900],
	},
	secondary: {
		light: tokens.colors.secondary[300],
		main: tokens.colors.secondary[500],
		dark: tokens.colors.secondary[700],
		contrastText: tokens.colors.dark[900],
	},
	error: {
		light: tokens.colors.error.light,
		main: tokens.colors.error.main,
		dark: tokens.colors.error.dark,
	},
	warning: {
		light: tokens.colors.warning.light,
		main: tokens.colors.warning.main,
		dark: tokens.colors.warning.dark,
	},
	info: {
		light: tokens.colors.info.light,
		main: tokens.colors.info.main,
		dark: tokens.colors.info.dark,
	},
	success: {
		light: tokens.colors.success.light,
		main: tokens.colors.success.main,
		dark: tokens.colors.success.dark,
	},
	grey: tokens.colors.grey,
	background: semanticTokens.dark.background,
	text: semanticTokens.dark.text,
};
