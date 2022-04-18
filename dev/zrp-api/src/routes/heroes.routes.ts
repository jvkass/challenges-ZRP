import { Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateHeroController } from "../modules/heroes/useCases/createHero/CreateHeroController";

const heroesRoutes = Router();

const createHeroesController = new CreateHeroController();

heroesRoutes.use("/",ensureAuthenticated);

heroesRoutes.post("/",createHeroesController.handle);

export { heroesRoutes };