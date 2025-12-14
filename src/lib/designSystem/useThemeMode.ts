import type { Theme } from "@mui/material/styles";
import { createIsomorphicFn } from "@tanstack/react-start";
import { useEffect, useMemo, useState } from "react";

import { darkTheme, lightTheme } from "./theme";

const getPreferedColorScheme = createIsomorphicFn()
	.server(() => "dark" as ThemeMode)
	.client(() => {
		const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;

		if (savedMode) return savedMode;

		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		}

		return "light";
	});

type ThemeMode = "light" | "dark";

export function useThemeMode() {
	const [mode, setMode] = useState(() => getPreferedColorScheme());

	// Listen for system theme changes
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = (e: MediaQueryListEvent) => {
			const savedMode = localStorage.getItem("themeMode");

			if (!savedMode) {
				setMode(e.matches ? "dark" : "light");
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	const toggleTheme = () => {
		setMode((prevMode) => {
			const newMode = prevMode === "light" ? "dark" : "light";
			localStorage.setItem("themeMode", newMode);
			return newMode;
		});
	};

	const theme: Theme = useMemo(
		() => (mode === "light" ? lightTheme : darkTheme),
		[mode],
	);

	return { mode, toggleTheme, theme };
}
