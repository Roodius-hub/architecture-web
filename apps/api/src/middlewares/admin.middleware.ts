import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {secret} from "../config/env.ts";


export async function auth(req:Request, res:Response, next:NextFunction) {
    console.log(req.headers.token)
    console.log(req.cookies);
        const authHeader = req.headers.authorization;
        console.log(authHeader)
           if (!authHeader) {
        return res.status(401).json({
            message: "Unauthorized"
        });
         }
        const token:string = authHeader.split(" ")[1] as string;
        try {
            const decoded = jwt.verify(token, secret);
            console.log(decoded);
            req.user = decoded;
            next();
        } catch(error){ 
            return res.status(401).json({
            message: "Invalid token"
        });
        }
}