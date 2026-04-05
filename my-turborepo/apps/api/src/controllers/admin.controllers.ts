import { request, Request , Response } from "express";
import db from "../db/db.ts";
import { AuthOption } from "../auth/auth.ts";
import { S3Client , PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// login and signup
export const loginAndSignUp = async (req:Request,res:Response) => {
    try {
        const response = AuthOption.handler(req)

        res.status((await response).status)

        const body  = (await response).text();
        res.send(body);

    } catch (error) {
        console.log(error, "Auth error");
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

// put data in s3 using Presigned
const putObject = async (filename:string, fileType:string) => {
    const command = new PutObjectCommand({
        Bucket: '',
        Key: `/admin/jpg/${filename}`,
        ContentType: fileType,
    })
    const url = await getSignedUrl(s3clinet, command, {expiresIn: 60})

    return url
}

const deleteData = async (filename:string) => {
    const command = new DeleteObjectCommand({
        Bucket: '', 
        Key:`/admin/jpg/${filename}`,
    })
    const deleteResponse = await s3clinet.send(command);
    console.log(deleteResponse);
}

const editData = () => {

}