import { response, type NextFunction, type Request , type Response } from "express";
import prisma from "../db/db.ts";
import { AuthOption } from "../auth/auth.ts";
import { S3Client , PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { filesType, parameterReqTypes } from "../types/types.ts";
// import { geturl } from "../utils/utils.ts";
// import axios, { all } from "axios";
import {randomUUID} from "crypto" 

// login and signup
export const loginAndSignUp = async (req:Request,res:Response) => {
    try {
        const url = `${req.protocol}://${req.get("host")}${req.url}`;

        const init:RequestInit = {
            method: req.method, 
            headers: req.headers as any
        };

        if(req.method !== "GET" && req.method !== "HEAD") {
            init.body = JSON.stringify(req.body);
        }

        const fetchReq = new Request(url, init);

        const response = await AuthOption.handler(fetchReq)
        const body  = await response.text();
        res.status(response.status).send(body);

    } catch (error) {
        console.log(error, "Auth error");
        res.status(500).send("Auth error");
    }
}

// client
    const s3clinet = new S3Client({
        region:"us-east-1",
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY as string,
            secretAccessKey: process.env.AWS_SECRET_KEY as string,
        },
    });

// PresignedUrl 
export const GetURL = async (req:Request, res:Response, next:NextFunction) => {
    const keys = req.body.keys as string[];
    const title = req.body.title as string;
    const fileTypes  = req.body.fileTypes as string[];

    const urls = await Promise.all(
        keys.map(async (key, index) => {
            const extension = key.split(".").pop();
            const command = new PutObjectCommand({
                Bucket: 'roodi-archi',
                Key: `${title}/${randomUUID()}.${extension}`,
                ContentType: fileTypes[index],
        });
        
        const url = await getSignedUrl(s3clinet, command, {expiresIn: 60})
        return url;
        // console.log(error);
    })
    )
    res.status(200).json({AllSignedURL:urls,Allkeys:keys,AllfileTypes:fileTypes})
    res.status(500).json({msg:"Error While Generating"})
}

//  put metadata
export const putData = async (req:Request, res:Response) => {
    try {
         const title = req.body.title as string;
         const OverView = req.body.OverView  as string;
         const technicaldetails = req.body.echnicaldetails as string;
         const keys = req.body.keys as string[];
         const ProjectFacts = req.body.ProjectFacts as string[]; 
         const time = new Date();


    // checking duplicates
    const duplicate = await prisma.metaData.findMany({
        where:{
            key: {
                in: keys
            }
        }
    })

    if (duplicate.length > 0) {
        return res.status(400).json({msg:"This data already present", duplicate})
    }


        const cdn = (process.env.CDN_DOM as string) + title;

        const post = await prisma.metaData.create({
            data: {
                title: title ,
                description: OverView,
                details: technicaldetails, 
                ProjectFacts: ProjectFacts,
                key: keys,
                time:time,
                cdn:cdn  
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
