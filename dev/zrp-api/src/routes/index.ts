import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { heroesRoutes } from "./heroes.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/heroes", heroesRoutes);

export { router };