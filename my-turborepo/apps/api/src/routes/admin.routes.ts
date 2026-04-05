import express from "express";
import { loginAndSignUp } from "../controllers/admin.controllers.ts";
const router = express.Router();

router.all('/auth/*', loginAndSignUp)

router.put("/uplaod");

router.delete("delete");



export default router;