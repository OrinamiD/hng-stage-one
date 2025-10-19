import express, { Router } from "express";
import { fetchUser } from "../controllers/user.controller.js";


const router: Router = express.Router();

router.get("/me", fetchUser);

export default router;
