import { NextFunction } from "express"

export interface createAdmin {
    email:String,
    password:String
}   

export interface parameterReqTypes {
    req:Response,
    res:Response, 
    next:NextFunction
}

export interface filesType {
    contenType:HTMLImageElement | HTMLDocument | HTMLObjectElement
}