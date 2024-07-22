import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import { userInfo } from "os"
const handler = NextAuth ({
    providers: [ {
        id: "provider-unique-id",
        name: "provider-description",
        type: "oauth",
        version: "2.0",
        state: true,
        authorization: {
            params: {
                scope: SCOPES.join(','),
                redirect_uri: APP_OAUTH_CALLBACK_URL,
            } 
        },
        clientId: process.env.PROVIDER_CLIENT_ID,
        clientSecret: process.env.PROVIDER_CLIENT_ID,
        userinfo: userProfileUrl,
        token: {
            url: accessToken
        },
        issuer: {
            token_endpoint: accessTokenUrl,
            userinfo_endpoint: userProfileUrl
        },
        profile(userInfo, tokens) {
            return {
                id: userInfo.id,
                name: userInfo.name,
                phoneNumber: userInfo.phone_number,
            }
        }
    }
            
            
    
    ],
    callbacks: {
        session: ({session, token: {account, user }}) => {
            session.user.id = user?.id 
            session.accessToken = account?.acess_token;
            session.provider = account?.provider;
            return session
        }
    },

     jwt: ({token, user, account, profile, isNewUser}) => {
        if(user) {
            token.user = user 
        }
        if (account) {
            token.account = account
        }
        return token
        },   
        pages: {
            signIn: "/signIn"
        }
    });
     
    
    export { handler as GET, handler as POST };