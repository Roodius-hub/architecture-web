import axios from "axios"



export const SignedUrl = async () => {
    const response = await axios.get("http:localhost:3000/admin/getURL")
}