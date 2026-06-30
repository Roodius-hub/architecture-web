import { Navigate, Outlet } from "react-router-dom";


export default  function ProtectRoute() {
    const token = cookieStore.get("token");

    return token ? <Outlet /> : <Navigate to="/" replace />;
}