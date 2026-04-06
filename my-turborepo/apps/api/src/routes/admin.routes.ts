import express from "express";
import { deleteData, GetURL, loginAndSignUp, putData } from "../controllers/admin.controllers.ts";
const router = express.Router();

router.all('/auth/*', loginAndSignUp)

router.get("/getURL", GetURL);

router.put("/put/metadata",putData)

router.delete("delete", deleteData);


export default router;