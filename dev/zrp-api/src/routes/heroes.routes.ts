import { Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateHeroController } from "../modules/heroes/useCases/createHero/CreateHeroController";
import { ListHeroController } from "../modules/heroes/useCases/listHero/ListHeroController";

const heroesRoutes = Router();

const createHeroController = new CreateHeroController();

const listHeroController =  new ListHeroController();

heroesRoutes.use("/",ensureAuthenticated);

heroesRoutes.post("/",createHeroController.handle);

heroesRoutes.get("/:id",listHeroController.handle);

heroesRoutes.get("/",listHeroController.listAll);

export { heroesRoutes };