import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({

  
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      accessTokenUrl: "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    
    
  ],
  jwt: {
    maxAge: 60
  },
  
  secret: process.env.secret,
  callbacks: {
    async jwt({token , account}) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token
      
    },
    
    
    
    async redirect({url, baseUrl}) {
      if (url === "/profile") {
        return Promise.resolve("/")
      }
      return Promise.resolve("/")
    },
    
    
    
  }
  
})
