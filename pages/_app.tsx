import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache
} from "@apollo/client";

const httpLink = createHttpLink({
	// uri: "http://localhost:3000/graphql"
	uri: "https://nestjsandgraphql.herokuapp.com/graphql"
});
export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
