import { Router } from "express";
import userRoutes from "./user.route.js";
const router = Router();
router.use("/user-cat", userRoutes);
export default router;
//# sourceMappingURL=index.route.js.map