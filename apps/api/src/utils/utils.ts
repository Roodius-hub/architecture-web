import axios from "axios";

// generating url
export const geturl = async () => {
    const response = await fetch("http://localhost:3001/admin/getURL")
    const url = await response.json();
    console.log(url);

    return url
}


// putting file
// const putting = async () => {
//     const url = await geturl();
//     console.log(url);

//     const SendImage = axios.put(url, {

//     })

// }