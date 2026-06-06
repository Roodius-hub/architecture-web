import axios from "axios";
import { useNavigate } from "react-router-dom"




export const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const token = localStorage.getItem("token");
       const res= await axios.post("http://localhost:3000/admin/logout", {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
       })
       if(res) {
        navigate("/")
       }
    }   

    return (
        <>
        <button className="p-2 border border-black-2px m-2 rounded-2xl font-bold text-white bg-black scale-75 hover:scale-100 cursor-pointer transform" onClick={handleLogout}>Logout</button>
        </>
    )
}