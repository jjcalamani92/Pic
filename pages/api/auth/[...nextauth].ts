import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "email",
					type: "email",
					placeholder: "email@email.com"
				},
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials, req) {
				const res = await fetch("/your/endpoint", {
					method: "POST",
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" }
				});
				const user = await res.json();

				// If no error and we have user data, return it
				if (res.ok && user) {
					return user;
				}
				// Return null if user data could not be retrieved
				return null;
			}
		})

		// ...add more providers here
	],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
		async session({ session, user, token }) {
			return session;
		},
		async jwt({ token, user, account }) {
			return token;
		}
	}
});
