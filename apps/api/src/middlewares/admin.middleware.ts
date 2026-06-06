import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {secret} from "../config/env.ts";


export async function auth(req:Request, res:Response, next:NextFunction) {
        const token = req.cookies.token;

           if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

        try {
            const decoded = jwt.verify(token, secret);
            console.log(decoded);
            next()
        } catch(error){ 
            return res.status(401).json({
            message: "Invalid token"
        });
        }
}