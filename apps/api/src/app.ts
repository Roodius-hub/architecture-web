import express, { json, response } from "express";
import AdminRouter from "./routes/admin.routes.ts";
import cors from "cors";
const app = express();

app.use(express.json()); 
app.use(express.raw());
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use("/admin", AdminRouter);
// app.use("users",)

app.get('/' , () => {
    response.send("server are working")
})

export default app; 

