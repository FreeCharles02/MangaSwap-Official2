import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
export default NextAuth ({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type:"text", placeholder: 'user'},
                password: { label: "Password",  type:"text", placeholder:'password'},
            },

            async authorize(credentials) {
                if (credentials == null) return null; {
                    //login
                    const { username, password } = credentials;
                    if (!user) {
                        console.log('user is not found!')
                    }
                    const isMatch = await user.matchPassword(password);
                    if(!isMatch) {
                        throw new Error("Username or Password is incorrect")
                    }
                    return user;
                }
            
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) { 
            return true
            } else {
                return false
            }
        }
    },
    async redirect({url, baseUrl}) {
        // Allows relative callback URLs
        if(url.startsWith("/")) return `${baseUrl}${url}`
        // Allows callback URLs on the same origin
        else if ( new URL(url).origin === baseUrl) return url
        return baseUrl
    },
    async session({session, user, token}) {
        return session
    },
    async jwt({token, user, account, profile, isNewUser}) {
        return token
    },
       pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signOut',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user'

       }, 

    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({token, user }) {
            if (user) {
                token.id = user._id.toString(); // Convert ObjectID to string
            }
        }
    }

})