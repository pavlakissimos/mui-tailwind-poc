import type { Theme } from "@mui/material/styles";
import { useMemo, useState } from "react";

import { darkTheme, lightTheme } from "./theme";

type ThemeMode = "light" | "dark";

export const useThemeMode = () => {
	const [mode, setMode] = useState<ThemeMode>("dark");

	// Listen for system theme changes
	// useEffect(() => {
	// 	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	//
	// 	const handleChange = (e: MediaQueryListEvent) => {
	// 		// TODO: make server safe
	// 		const savedMode = localStorage.getItem("themeMode");
	//
	// 		if (!savedMode) {
	// 			setMode(e.matches ? "dark" : "light");
	// 		}
	// 	};
	//
	// 	mediaQuery.addEventListener("change", handleChange);
	// 	return () => mediaQuery.removeEventListener("change", handleChange);
	// }, []);

	const toggleTheme = () => {
		setMode((prevMode) => {
			const newMode = prevMode === "light" ? "dark" : "light";
			return newMode;
		});
	};

	const theme: Theme = useMemo(
		() => (mode === "light" ? lightTheme : darkTheme),
		[mode],
	);

	return { mode, toggleTheme, theme };
};
