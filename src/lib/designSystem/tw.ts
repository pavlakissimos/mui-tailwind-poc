import { tokens } from "./tokens";

const generateCSSVariables = () => {
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

	return cssVars;
};

export function setupTw() {
	const cssVars = generateCSSVariables();
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(`
    @layer theme {
      :root {
        ${Object.entries(cssVars)
					.map(([key, value]) => `${key}: ${value};`)
					.join("")}
      }
    }
  `);
	document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
}
