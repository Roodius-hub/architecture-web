import axios from "axios";
import type { metaData } from "./types";
import type { PayloadTypes } from "./types";

const GetUrl = async (newForm:FormData, title:string) => {
    const payload:PayloadTypes = {
        title,
        keys: [], 
        fileTypes:[]
    }

    newForm.forEach((value) => {
        if (value instanceof File) {
            payload.keys.push(value.name);
            payload.fileTypes.push(value.type);
        }
    })

    console.log(payload);

    const response = await axios.put("http://localhost:3000/admin/getURL", payload)
    const jsonData = response.data;
    return jsonData;
}

const keys : String[] = [];

export async function UploadProjectMetaData({title, overview, TechnicalDetail, area, Sitearea, status, Duration}:metaData) {
    const ProjectFacts = [area, Sitearea, status, Duration];
    const response =  await axios.post("http://localhost:3000/admin/metadata", {
        title, 
        overview,
        TechnicalDetail,
        ProjectFacts,
        keys,
    })

    const jsonData = response.data
    console.log(jsonData);
}

export async function UploadProjectsImages(newForm:FormData, title:string) {
    const Allurls = await GetUrl(newForm, title);
    const files:File[] = [];
    console.log(Allurls);
    // All files in Files Array
    newForm.forEach((value) => {
        if (value instanceof File) {
            files.push(value);
        }
    })

    await Promise.all(
        Allurls.map((url:string, index:number) => {
            keys.push(url.Imagekey);
            console.log(url.Imagekey);
            axios.put(url, files[index], {
                headers: {
                    "Content-Type" : files[index].type
                }
            })
        })
    )

}