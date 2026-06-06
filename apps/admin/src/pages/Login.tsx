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
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-md border-2 border-white p-8">
        <div className="mb-8 text-center">
          <pre className="text-3xl">
            Login
          </pre>

          <p className="mt-4 tracking-widest">
            SYSTEM ACCESS TERMINAL
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 uppercase text-sm">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              className="w-full bg-black border-2 border-white p-3 outline-none focus:bg-white focus:text-black transition"
            />
          </div>

          <div>
            <label className="block mb-2 uppercase text-sm">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              className="w-full bg-black border-2 border-white p-3 outline-none focus:bg-white focus:text-black transition"
            />
          </div>

          <button onClick={handleLogin}
            type="submit"
            className="w-full border-2 border-white py-3 uppercase tracking-widest hover:bg-white hover:text-black transition"
          >
            Login
          </button>
        </div>

        <div className="mt-8 border-t border-white pt-4 text-xs text-center opacity-70">
          © Roodius-hub
        </div>
      </div>
    </div>
  );
}