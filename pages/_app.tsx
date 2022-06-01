import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache
} from "@apollo/client";

const httpLink = createHttpLink({
	uri: "https://nestjsandgraphql.herokuapp.com/graphql"
});
export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</SessionProvider>
	);
}

export default MyApp;
