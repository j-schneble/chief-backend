import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import {compare} from 'bcryptjs';

export default NextAuth({
    providers: [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials,req){
                connectMongo().catch(error =>{error:"Connection Failed!"})

                // check user existance
                const result = await Users.findOne({ email : credentials.email})
                if(!result){
                    throw new Error("No user Found with Email Please Sign Up!")
                }

                // compare()
                const checkPassword = await compare(credentials.password,result.password);

                // incorrect password
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error("Username or Password dosent match");
                }

                return result;
            }
        })
    ],
    secret:"VFK0uBeEgoMwVqHry+MiTUFnny0s550pfP9ZihAltrs="
})