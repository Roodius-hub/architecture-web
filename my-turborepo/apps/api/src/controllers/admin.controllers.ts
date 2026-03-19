import { Request , Response } from "express";
import { createAdmin } from "../types/types.ts";
import { inputSchema } from "../utils/utils.ts";
import db from "../db/db.ts"
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcryptjs";

const  get_data = async (req: Request<{}, {}, createAdmin>, res:Response) => {
    const email = req.body.email;   
    const password = req.body.password;
    const parseInput = inputSchema.safeParse({email, password});
    try {if (parseInput.success) {
        await db.admin.findUnique({
            where:{
                email:email,
            }
        })
        return "Logged In"
    }} catch(e){
        console.log("Email Not Found", e);
    } 
     
}