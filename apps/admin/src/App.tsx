import {Login} from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";

export default function App() {

  return <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/upload" element={<Upload />}/>
      </Routes>
    </>;
}