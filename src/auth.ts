import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import Google from "next-auth/providers/google"
import { Connect } from "./db/Connection"
import User from "./db/models/UserSchema"
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers:
        [
            Google,
            Credentials({
                credentials: {
                    email: {},
                    password: {},
                },
                authorize: async (credentials) => {
                    const email = credentials.email as string
                    const password = credentials.password as string

                    await Connect();

                    const user = await User.findOne({ email })

                    if (!user) {
                        throw new CredentialsSignin('You are not registered')
                    }

                    const isMatch = await bcrypt.compare(password, user.password);

                    if (user && !isMatch) {
                        throw new CredentialsSignin('Please write correct password')
                    }

                    if (!user.verified) {
                        throw new CredentialsSignin('Please verify your email first')
                    }
                    return user;
                }
            })
        ],
    callbacks: {
        async signIn({ user, account }) {
            try {
                if (account?.provider == 'google') {
                    await Connect();
                    let email = user.email;
                    const data = await User.findOne({ email })
                    if (!data) {
                        let { email, name, image } = user;
                        await User.create({ email, name, image, provider: 'GOOGLE', verified: true })
                        return true
                    }
                    else {
                        console.log('signing in');
                        return true
                    }
                }
                else if (account?.provider === 'credentials') {
                    return true
                }
                else {
                    return false
                }
            } catch (error) {
                return false
            }
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id as string
                token.email = user.email as string
                token.name = user.name as string
                token.image = user.image as string
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.image = token.image as string || '/dummy.jpg' as string
            }
            return session
        },
    },
    pages: {
        signIn: '/login',
        error: '/error',
    }
})




