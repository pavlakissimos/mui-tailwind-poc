import type { PaletteOptions } from "@mui/material/styles";
import { tokens } from "./tokens";

export const lightPalette: PaletteOptions = {
	mode: "light",
	primary: {
		light: tokens.colors.yellow[300],
		main: tokens.colors.yellow[500],
		dark: tokens.colors.yellow[700],
		contrastText: tokens.colors.black[900],
	},
	secondary: {
		light: tokens.colors.cyan[300],
		main: tokens.colors.cyan[500],
		dark: tokens.colors.cyan[700],
		contrastText: tokens.colors.black[900],
	},
	error: {
		light: tokens.colors.red[300],
		main: tokens.colors.red[500],
		dark: tokens.colors.red[700],
	},
	warning: {
		light: tokens.colors.amber[300],
		main: tokens.colors.amber[500],
		dark: tokens.colors.amber[700],
	},
	info: {
		light: tokens.colors.teal[300],
		main: tokens.colors.teal[500],
		dark: tokens.colors.teal[700],
	},
	success: {
		light: tokens.colors.green[300],
		main: tokens.colors.green[500],
		dark: tokens.colors.green[700],
	},
	grey: tokens.colors.grey,
	background: {
		default: tokens.colors.grey[100],
		paper: tokens.colors.grey[50],
	},
	text: {
		primary: tokens.colors.black[900],
		secondary: tokens.colors.grey[700],
		disabled: tokens.colors.grey[400],
	},
};

export const darkPalette: PaletteOptions = {
	mode: "dark",
	primary: {
		light: tokens.colors.yellow[300],
		main: tokens.colors.yellow[500],
		dark: tokens.colors.yellow[700],
		contrastText: tokens.colors.black[900],
	},
	secondary: {
		light: tokens.colors.cyan[300],
		main: tokens.colors.cyan[500],
		dark: tokens.colors.cyan[700],
		contrastText: tokens.colors.black[900],
	},
	error: {
		light: tokens.colors.red[300],
		main: tokens.colors.red[500],
		dark: tokens.colors.red[700],
	},
	warning: {
		light: tokens.colors.amber[300],
		main: tokens.colors.amber[500],
		dark: tokens.colors.amber[700],
	},
	info: {
		light: tokens.colors.teal[300],
		main: tokens.colors.teal[500],
		dark: tokens.colors.teal[700],
	},
	success: {
		light: tokens.colors.green[300],
		main: tokens.colors.green[500],
		dark: tokens.colors.green[700],
	},
	grey: tokens.colors.grey,
	background: {
		default: tokens.colors.black[500],
		paper: tokens.colors.black[400],
	},
	text: {
		primary: tokens.colors.grey[50],
		secondary: tokens.colors.grey[400],
		disabled: tokens.colors.grey[600],
	},
};
