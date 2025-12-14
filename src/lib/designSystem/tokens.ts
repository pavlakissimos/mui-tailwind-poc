// design-system/tokens.ts - Cyberpunk 2077 Design System
export const tokens = {
	colors: {
		yellow: {
			50: "#FFFBEB",
			100: "#FEF3C7",
			200: "#FDE68A",
			300: "#FCD34D",
			400: "#FBBF24",
			500: "#FCE300", // main - that signature CP2077 yellow
			600: "#D97706",
			700: "#B45309",
			800: "#92400E",
			900: "#78350F",
		},
		cyan: {
			50: "#ECFEFF",
			100: "#CFFAFE",
			200: "#A5F3FC",
			300: "#67E8F9",
			400: "#22D3EE",
			500: "#00F0FF", // main - electric cyan
			600: "#0891B2",
			700: "#0E7490",
			800: "#155E75",
			900: "#164E63",
		},
		pink: {
			50: "#FDF2F8",
			100: "#FCE7F3",
			200: "#FBCFE8",
			300: "#F9A8D4",
			400: "#F472B6",
			500: "#FF006E", // main - hot pink
			600: "#DB2777",
			700: "#BE185D",
			800: "#9D174D",
			900: "#831843",
		},
		purple: {
			50: "#FAF5FF",
			100: "#F3E8FF",
			200: "#E9D5FF",
			300: "#D8B4FE",
			400: "#C084FC",
			500: "#A855F7",
			600: "#9333EA",
			700: "#7E22CE",
			800: "#6B21A8",
			900: "#581C87",
		},
		grey: {
			50: "#F9FAFB",
			100: "#F3F4F6",
			200: "#E5E7EB",
			300: "#D1D5DB",
			400: "#9CA3AF",
			500: "#6B7280",
			600: "#4B5563",
			700: "#374151",
			800: "#1F2937",
			900: "#111827",
		},
		black: {
			50: "#2D2D2D",
			100: "#252525",
			200: "#1E1E1E",
			300: "#181818",
			400: "#121212",
			500: "#0D0D0D", // main background
			600: "#0A0A0A",
			700: "#070707",
			800: "#050505",
			900: "#000000",
		},
		green: {
			50: "#ECFDF5",
			100: "#D1FAE5",
			200: "#A7F3D0",
			300: "#6EE7B7",
			400: "#34D399",
			500: "#10B981", // green for "connected"
			600: "#059669",
			700: "#047857",
			800: "#065F46",
			900: "#064E3B",
		},
		red: {
			50: "#FEF2F2",
			100: "#FEE2E2",
			200: "#FECACA",
			300: "#FCA5A5",
			400: "#F87171",
			500: "#EF4444", // red for "disconnected/danger"
			600: "#DC2626",
			700: "#B91C1C",
			800: "#991B1B",
			900: "#7F1D1D",
		},
		amber: {
			50: "#FFFBEB",
			100: "#FEF3C7",
			200: "#FDE68A",
			300: "#FCD34D",
			400: "#FCA21B",
			500: "#F59E0B", // amber warnings
			600: "#D97706",
			700: "#B45309",
			800: "#92400E",
			900: "#78350F",
		},
		teal: {
			50: "#F0FDFA",
			100: "#CCFBF1",
			200: "#99F6E4",
			300: "#5EEAD4",
			400: "#2DD4BF",
			500: "#14B8A6",
			600: "#0D9488",
			700: "#0F766E",
			800: "#115E59",
			900: "#134E4A",
		},
	},
	spacing: {
		0: "0rem",
		1: "0.25rem",
		2: "0.5rem",
		3: "0.75rem",
		4: "1rem",
		5: "1.25rem",
		6: "1.5rem",
		8: "2rem",
		10: "2.5rem",
		12: "3rem",
		16: "4rem",
		20: "5rem",
		24: "6rem",
		32: "8rem",
	},
	borderRadius: {
		none: "0rem",
		sm: "0.125rem", // Sharp, tech-y
		md: "0.25rem",
		lg: "0.375rem",
		xl: "0.5rem",
		"2xl": "0.75rem",
		full: "624.9375rem",
	},
	fontSize: {
		xs: "0.75rem", // 12px
		sm: "0.875rem", // 14px
		base: "1rem", // 16px
		lg: "1.125rem", // 18px
		xl: "1.25rem", // 20px
		"2xl": "1.5rem", // 24px
		"3xl": "1.875rem", // 30px
		"4xl": "2.25rem", // 36px
		"5xl": "3rem", // 48px
		"6xl": "3.75rem", // 60px
		"7xl": "4.5rem", // 72px
	},
	fontWeight: {
		light: 300,
		regular: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		black: 900,
	},
	fontFamily: {
		primary: '"Rajdhani", "Orbitron", "Roboto", sans-serif', // Futuristic, tech
		mono: '"Fira Code", "JetBrains Mono", monospace', // Code/terminal
	},
	shadows: {
		sm: "0 0 10px rgba(252, 227, 0, 0.3)",
		md: "0 0 20px rgba(0, 240, 255, 0.4)",
		lg: "0 0 30px rgba(255, 0, 110, 0.5)",
		xl: "0 0 40px rgba(168, 85, 247, 0.6)",
		neonYellow:
			"0 0 20px rgba(252, 227, 0, 0.8), 0 0 40px rgba(252, 227, 0, 0.4)",
		neonCyan:
			"0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.4)",
		neonPink:
			"0 0 20px rgba(255, 0, 110, 0.8), 0 0 40px rgba(255, 0, 110, 0.4)",
	},
	effects: {
		glitch: {
			textShadow: "2px 2px #FF006E, -2px -2px #00F0FF",
		},
		scanlines: {
			backgroundImage:
				"repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",
		},
	},
};
