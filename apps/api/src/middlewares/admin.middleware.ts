import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {secret} from "../config/env.ts";


export async function auth(req:Request, res:Response, next:NextFunction) {
    try {
        console.log("Cookies:", req.cookies);
        const token = req.cookies.token;
        console.log("Token:", token);

        if (!token) {
            return res.status(401).json({
                message: "Authorization header missing"
            });
        }

        // const token = authorization.split(" ")[1];

        console.log("Before verify");
        const decoded = jwt.verify(token, secret);
        // const decoded = jwt.decode(token);
        console.log("After verify");
        console.log(decoded);

        req.user = decoded;

        next();
    } catch (error) {
        console.error(error);

        return res.status(401).json({
            message: "Invalid token"
        });
    }
}