import  { authClient } from "../lib/auth-client";


export default  function Login() {
    const handleLogin = async () => {
        await authClient.signIn.email({
            email: "osmansaifi30@gmail.com",
            password:"osmansaifi@959"
        })
    }
    return <button onClick={handleLogin}>Login</button>
}