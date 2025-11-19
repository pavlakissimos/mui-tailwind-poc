import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { type PropsWithChildren, useEffect } from "react";

import * as TanstackQuery from "./integrations/tanstack-query/root-provider";
import { generateCSSVariables } from "./lib/designSystem/cssVariables";
import { useThemeMode } from "./lib/designSystem/useThemeMode";
import { routeTree } from "./routeTree.gen";

const Theme = ({ children }: PropsWithChildren) => {
	const { mode, theme } = useThemeMode();

	// Inject CSS variables when mode changes
	useEffect(() => {
		const root = document.documentElement;
		const variables = generateCSSVariables(mode);

		Object.entries(variables).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	}, [mode]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

// Create a new router instance
export const getRouter = () => {
	const rqContext = TanstackQuery.getContext();

	const router = createRouter({
		routeTree,
		context: { ...rqContext },
		defaultPreload: "intent",
		Wrap: (props: { children: React.ReactNode }) => {
			return (
				<Theme>
					<TanstackQuery.Provider {...rqContext}>
						{props.children}
					</TanstackQuery.Provider>
				</Theme>
			);
		},
	});

	setupRouterSsrQueryIntegration({
		router,
		queryClient: rqContext.queryClient,
	});

	return router;
};
