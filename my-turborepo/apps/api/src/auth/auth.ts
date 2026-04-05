import {betterAuth} from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import db from "../db/db.ts"

export const AuthOption = betterAuth({
    // database
        database: prismaAdapter(db, {
            provider:'postgresql'
        }), 

    // email and password 
    emailAndPassword:{
        enabled:true
    },

    // google auth
    socialProviders: {
        google: {
            clientId: process.env.CLIENT_ID as string, 
            clientSecret: process.env.CLIENT_SECRET as string
        }
    }, 

    // callback for email checking
    callbacks: {
        async SignIn({user}) {
            const allowedUser = process.env.ALLOW_USER;

            if(user.email !== allowedUser) {
                throw new Error("Access restricted to admin only");
            }

            return true
        }
    }

})