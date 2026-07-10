// import axios from "axios";
// import { useState } from "react";
// import { data, useNavigate } from "react-router-dom";

// export function Login() {
//         const navigate = useNavigate();
//     const [email, SetEmail] = useState<string>("");
//     const [password, SetPassword] = useState<string>("");
//     const [logged, SetLogged] = useState<boolean>(false);
//     const handleLogin = async () => {
//         try {
//             const response = await axios.put("http://localhost:3000/admin/api/auth", {
//             email,
//             password
//         } , {
//             withCredentials:true
//         })
//         if (!response) {
//             return false
//         }
//         console.log(response.data.token);
//         // localStorage.setItem("token",response.data.token);
//         SetLogged(true);
//         navigate("/upload");
//         } catch (error:any) {
//              if (axios.isAxiosError(error)) {
//                 const seconds = error.response?.data.retryAfter;
//                 console.log(seconds);
//              }
//         }
        
//     }

//     return (<div>
//         <input onChange={(e) => SetEmail(e.target.value)} type="text" placeholder="email"/>
//         <input onChange={(e) => SetPassword(e.target.value)} type="password" placeholder="password"/>
//         <button onClick={handleLogin}>Login</button> 
//     </div>)
// }

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
     const navigate = useNavigate();
    const [email, SetEmail] = useState<string>("");
    const [password, SetPassword] = useState<string>("");
    const [logged, SetLogged] = useState<boolean>(false);
    const handleLogin = async () => {
        try {
            const response = await axios.put("http://localhost:3000/admin/api/auth", {
            email,
            password
        } , {
            withCredentials:true
        })
        if (!response) {
            return false
        } 
        // console.log(response.data.token);
        // localStorage.setItem("token",response.data.token);
        SetLogged(true)
        if(logged) {    
            navigate("/upload");
        }
        } catch (error:any) {
             if (axios.isAxiosError(error)) {
                const seconds = error.response?.data.retryAfter;
                console.log(seconds);
             }
        }
        
    }


  return (
  <div className="min-h-screen bg-black flex items-center justify-center p-6">
    <div className="w-full max-w-md rounded-xl border-[6px] border-black bg-[#f8f8d8] shadow-[10px_10px_0px_#000] overflow-hidden">

      {/* Header */}
      <div className="bg-[#ffcb05] border-b-4 border-black p-4">
        <h1 className="text-3xl font-black text-center tracking-wider text-[#2a75bb]">
          TRAINER LOGIN
        </h1>
      </div>

      {/* Card */}
      <div className="p-8">

        {/* Pokeball */}
        <div className="flex justify-center mb-8">
          <div className="relative h-24 w-24 rounded-full border-[6px] border-black overflow-hidden">

            <div className="h-1/2 bg-red-500" />

            <div className="h-1/2 bg-white" />

            <div className="absolute top-1/2 left-0 w-full h-[6px] bg-black -translate-y-1/2" />

            <div className="absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-black bg-white" />
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-bold uppercase tracking-widest">
            Trainer ID
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            placeholder="trainer@email.com"
            className="w-full rounded-md border-4 border-black bg-white px-4 py-3 outline-none focus:border-[#2a75bb]"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="block mb-2 font-bold uppercase tracking-widest">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-md border-4 border-black bg-white px-4 py-3 outline-none focus:border-[#2a75bb]"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full rounded-md border-4 border-black bg-[#ffcb05] py-4 text-xl font-black uppercase tracking-widest transition hover:translate-y-[2px] hover:bg-[#ffd84d] active:translate-y-1"
        >
          Start Journey
        </button>

        <div className="mt-8 rounded-md border-4 border-black bg-white p-4 text-center text-sm">
          <p>⚡ Welcome, Trainer!</p>
          <p className="text-gray-600">
            Enter your credentials to continue.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}