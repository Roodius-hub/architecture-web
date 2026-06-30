import {Login} from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import ProtectRoute  from "./pages/ProtectRoute";

export default function App() {

  return <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route element={<ProtectRoute />}>
        <Route path="/upload" element={<Upload />}/>
        </Route>
      </Routes>
    </>;
}