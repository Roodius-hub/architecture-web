import express from "express";
import { deleteData, GetURL, loginAndSignUp, putData } from "../controllers/admin.controllers.ts";
const router = express.Router();

// router.all('/api/auth/*', loginAndSignUp)

// for frontend
router.put("/getURL", GetURL);

//for frontend
router.put("/put/metadata",putData)

router.delete("delete", deleteData);


export default router;