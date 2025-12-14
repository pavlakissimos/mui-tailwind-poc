import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { createIsomorphicFn } from "@tanstack/react-start";
import { type PropsWithChildren, useEffect } from "react";

import * as TanstackQuery from "./integrations/tanstack-query/root-provider";
import { setupTw } from "./lib/designSystem/tw";
import { useThemeMode } from "./lib/designSystem/useThemeMode";
import { routeTree } from "./routeTree.gen";

const isoTwSetup = createIsomorphicFn()
	.server(() => {})
	.client(() => setupTw());

isoTwSetup();

const Theme = ({ children }: PropsWithChildren) => {
	const { mode, theme } = useThemeMode();

	// Set data-theme attribute for CSS-based theme switching
	useEffect(() => {
		document.documentElement.setAttribute("data-theme", mode);
	}, [mode]);

	return (
		<StyledEngineProvider enableCssLayer>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
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
