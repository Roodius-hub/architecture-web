import  bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db/db.ts";
import {secret} from "../config/env.ts"
import type {Request, Response} from "express";


export const Auth = async  (req:Request, res:Response) => {
    const {email, password } = req.body;

    try {
        const admin = await  db.admin.findUnique({
            where: {
                email:email
            }
        })
        if(!admin) {
         return res.status(401).json({
        message: "Invalid email"
                });
            }
        const validPassword = await bcrypt.compare(password, admin.password);
            if (!validPassword) {
                return res.status(404).json({message:"password is wrong"});
            }
        const token  = jwt.sign({email}, secret, {expiresIn:"7d"});

        res.cookie("token",token, {
            httpOnly:true,
            sameSite:"lax",
            secure:false,
            maxAge:7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            message: "Login successful", 
            token
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Error"});
    }

}