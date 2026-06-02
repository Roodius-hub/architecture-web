import app from "./src/app"
import env from "dotenv";
env.config();

const port = process.env.PORT
console.log(port)

app.listen(port, () => console.log(`server runing on ${port}`));
