import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getSession } from "next-auth/react";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                identifier: { label: "Username", type: "text", placeholder: "User name" },
                password: { label: "Password", type: "password", placeholder: "**********" },
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch("http://127.0.0.1:1337/api/auth/local", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        },
                        body: JSON.stringify({
                            identifier: credentials?.identifier,
                            password: credentials?.password,
                        }),
                    });

                    if (!res.ok) {
                        throw new Error("Authentication failed");
                    }
                    debugger
                    const data = await res.json();
                    console.log(data);

                    const session = await getSession({ req });
                    if (session) {
                        session.jwt = data.jwt;
                    }

                    return data;
                } catch (error) {
                    console.error("Authentication error:", error);
                    return null;
                }
            },
        }),
    ],

    pages: {
        signIn: "/auth/signIn",
    },
});