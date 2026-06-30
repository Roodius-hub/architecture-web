import express from "express";
import AdminRouter from "./routes/admin.routes.ts";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./middlewares/admin.middleware.ts";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json()); 
app.use(express.raw());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser());
app.use("/admin",AdminRouter);
// app.use("users",)

app.get('/' , (req,res) => {
    res.status(200).send("server are working")
})

export default app; 

