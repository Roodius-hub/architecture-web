import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {secret} from "../config/env.ts";


export async function auth(req:Request, res:Response, next:NextFunction) {
    // console.log(req.headers.token)
    // console.log(req.cookies);
        const authorization:string = req.headers.authorization as string;
        console.log(authorization)
        //    if (!authHeader) {
        // return res.status(401).json({
        //     message: "Unauthorized"
        // });
        //  }
        const token:string = authorization.split(" ")[1] as string;
        console.log(token)
        // console.log(secret)
        try {
            console.log("Before verify");
            const decoded = jwt.verify(token, secret);
            console.log("After verify");
            console.log(jwt.decode(decoded));
            req.user = decoded;
            next();
        } catch(error){ 
            return res.status(401).json({
            message: "Invalid token"
        });
        }
}