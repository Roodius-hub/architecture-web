import { NextFunction } from "express"
import z from "zod";
   
export interface parameterReqTypes {
    req:Response,
    res:Response, 
    next:NextFunction
}

export interface filesType {
    contenType:HTMLImageElement | HTMLDocument | HTMLObjectElement
}


export const inputSchema = z.object({
    email: z.string(),
    password: z.string()
})

export type inputTypes = z.infer<typeof inputSchema>