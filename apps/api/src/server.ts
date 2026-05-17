import app from "./app.js"
import env from "dotenv";
env.config();

const port = process.env.PORT
console.log(port)

app.listen(port, () => console.log(`server runing on ${port}`));
