// design-system/cssVariables.ts
import { semanticTokens, tokens } from "./tokens";

export const generateCSSVariables = (mode: "light" | "dark") => {
	const semantic =
		mode === "light" ? semanticTokens.light : semanticTokens.dark;
	const cssVars: Record<string, string> = {};

	// Generate color variables
	Object.entries(tokens.colors).forEach(([colorName, shades]) => {
		if (typeof shades === "object") {
			Object.entries(shades).forEach(([shade, value]) => {
				cssVars[`--color-${colorName}-${shade}`] = value;
			});
		}
	});

	// Generate spacing variables
	Object.entries(tokens.spacing).forEach(([key, value]) => {
		cssVars[`--spacing-${key}`] = value;
	});

	// Generate border radius variables
	Object.entries(tokens.borderRadius).forEach(([key, value]) => {
		cssVars[`--radius-${key}`] = value;
	});

	// Generate font size variables
	Object.entries(tokens.fontSize).forEach(([key, value]) => {
		cssVars[`--font-size-${key}`] = value;
	});

	// Generate font weight variables
	Object.entries(tokens.fontWeight).forEach(([key, value]) => {
		cssVars[`--font-weight-${key}`] = String(value);
	});

	// Add semantic tokens (these change based on mode)
	cssVars["--color-background-default"] = semantic.background.default;
	cssVars["--color-background-paper"] = semantic.background.paper;
	cssVars["--color-text-primary"] = semantic.text.primary;
	cssVars["--color-text-secondary"] = semantic.text.secondary;
	cssVars["--color-text-disabled"] = semantic.text.disabled;

	return cssVars;
};
