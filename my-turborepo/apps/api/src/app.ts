import express, { json, response } from "express";
import AdminRouter from "./routes/admin.routes.ts";
const app = express();

app.use(express.json()); 
app.use("/admin", AdminRouter);
app.use("users", )

app.get('/' , () => {
    response.send("server are working")
})

export default app; 

