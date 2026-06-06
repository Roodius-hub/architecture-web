import { response, type NextFunction, type Request , type Response } from "express";
import prisma from "../db/db.ts";
import { S3Client , PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { filesType, parameterReqTypes } from "../types/types.ts";
// import { geturl } from "../utils/utils.ts";
// import axios, { all } from "axios";
import {randomUUID} from "crypto" 

// client
    const s3clinet = new S3Client({
        region:"us-east-1",
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY as string,
            secretAccessKey: process.env.AWS_SECRET_KEY as string,
        },
    });


// PresignedUrl 
export const GetURL = async (req:Request, res:Response) => {
    const keys = req.body.keys as string[];
    const title = req.body.title as string;
    const fileTypes  = req.body.fileTypes as string[];

    const urls = await Promise.all(
        keys.map(async (key, index) => {
            const extension = key.split(".").pop();
            const Imagekey = `${title}/${randomUUID()}.${extension}`;
            const command = new PutObjectCommand({
                Bucket: 'roodi-archi',
                Key: Imagekey,
                ContentType: fileTypes[index],
        });
        
        const url = await getSignedUrl(s3clinet, command, {expiresIn: 120})
        return {url, Imagekey};
        // console.log(error);
    })
    )
    res.status(200).json({urls})
    // res.status(500).json({msg:"Error While Generating"})
}

//  put metadata
export const putData = async (req:Request, res:Response) => {
    try {
        console.log(req.body)
         const title = req.body.title as string;
         const overview = req.body.overview  as string;
         const technicaldetails = req.body.TechnicalDetails  ;
         const keys = req.body.keys as string[];
         const ProjectFacts = req.body.ProjectFacts as string[]; 
         const time = new Date();


    // checking duplicates
    const duplicate = await prisma.metaData.findMany({
        where:{
            keys: {
                hasSome: keys
            }
        }
    })

    if (duplicate.length > 0) {
        return res.status(400).json({msg:"This data already present", duplicate})
    }


        const cdn = process.env.CDN_DOM as string;

        const post = await prisma.metaData.create({
            data: {
                Title: title ,
                overview: overview,
                ProjectFacts: ProjectFacts,
                TechnicalDetails:technicaldetails,
                keys: keys,
                CDN:cdn,
                Type:"jpg",
                Time: new Date(),
            }
        });
        return res.status(200).json({"posts":post})
   
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something bad Wrong"})
    
    }
}


//  delete
export const deleteData = async (req:Request, res:Response, next:NextFunction) => {
    const title = req.body.title  as string;
    const key = req.body.key as string;

    const command = new DeleteObjectCommand({
        Bucket: 'roodi-archi', 
        Key:`${title}`,
    })
    try {
        const deleteResponse = await s3clinet.send(command);
        console.log(deleteResponse);
        res.send(deleteResponse)
    } catch(error) {
        console.log(error);
    }
}


export const logout = (req:Request, res:Response) => {
    res.clearCookie("token");
    res.status(200).json({message: "Logged out"});
}