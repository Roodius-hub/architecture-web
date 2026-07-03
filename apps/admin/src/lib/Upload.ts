import axios from "axios";
import type { metaData } from "./types";
// import type { PayloadTypes } from "./types";
// import type { AnyCnameRecord } from "dns";
// const token = localStorage.getItem("token");

const GetUrl = async (files:any, title:string) => {
    
       const keys:string[] = [];
        const fileTypes:string[] = [];
    
    files.forEach((value:any) => {
        console.log(value);
        if (value instanceof File) {
            keys.push(value.name);
            // console.log(keys)
            fileTypes.push(value.type);
        }
    })

    console.log(keys,fileTypes);
    const response = await axios.put("http://localhost:3000/admin/getURL", {
        keys,
        title,
        fileTypes
    } , {
        withCredentials:true,
    })
    // const jsonData = response.data;
    console.log(response.data)
    return response.data;
}



export async function UploadProjectMetaData({title, overview, TechnicalDetails, area, Sitearea, status, Duration ,keys}:metaData) {
    const ProjectFacts = [area, Sitearea, status, Duration];
    const response =  await axios.post("http://localhost:3000/admin/metadata", {
        title:title,
        overview:overview,  
        TechnicalDetails:TechnicalDetails,  
        ProjectFacts:ProjectFacts,
        keys:keys
    }, {
        withCredentials:true,
    })

    const jsonData = response.data
    console.log(jsonData);
    return jsonData;
}

export async function UploadProjectsImages(files:any, title:string) {
    const Allurls = (await GetUrl(files, title)).urls;

    const keys : string[] = [];

    const res = await Promise.all(
        Allurls.map(async (item:any, index:number) => {
            keys.push(item.Imagekey);
            console.log(item.Imagekey);
           const upload = await axios.put(item.url, files[index], {
                        headers: {
                "Content-Type": files[index].type,
            },
                withCredentials : true
                
            })
            console.log(upload);
        })
    )
    console.log(keys)
    return keys
    
}