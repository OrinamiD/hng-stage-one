import express, { Router } from "express";
import { fetchUser } from "../controllers/user.controller.js";
const router = express.Router();
router.get("/me", fetchUser);
export default router;
//# sourceMappingURL=user.route.js.map