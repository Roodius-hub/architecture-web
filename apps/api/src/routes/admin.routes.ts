import express from "express";
import { deleteData, getData, GetURL, logout, message, putData, UniqueProject } from "../controllers/admin.controllers.ts";
import {Auth} from "../auth/auth.ts"
import { toNodeHandler } from "better-auth/node";
import { auth } from "../middlewares/admin.middleware.ts";
// import { LoginLimit } from "../utils/utils.ts";
const router = express.Router();

router.put('/api/auth', Auth)

// for frontend
router.put("/getURL", auth, GetURL);

//for frontend
router.post("/metadata",auth, putData)

//logout 
router.post("/logout", auth,logout);

// get data 
router.get('/projects', getData);

// delete
router.delete("/delete", auth, deleteData);

//get project by id 
router.get("/getbyid/:id", UniqueProject);

router.post('/message', message);

export default router;