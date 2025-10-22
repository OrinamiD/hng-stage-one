import express, { Router } from "express";

const router: Router = express.Router();

import stringRoute from "./string.route.js";

router.use("/analyze", stringRoute);

export default router;

// import { Router } from "express";

// import userRoutes from "./user.route.js";

// const router: Router = Router();

// router.use("/user-cat", userRoutes);

// export default router;
