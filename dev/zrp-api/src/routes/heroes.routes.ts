import { Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateHeroController } from "../modules/heroes/useCases/createHero/CreateHeroController";
import { DeleteHeroController } from "../modules/heroes/useCases/deleteHero/DeleteHeroController";
import { ListHeroController } from "../modules/heroes/useCases/listHero/ListHeroController";
import { UpdateHeroController } from "../modules/heroes/useCases/updateHero/UpdateHeroController";

const heroesRoutes = Router();

const createHeroController = new CreateHeroController();

const listHeroController =  new ListHeroController();

const updateHeroController =  new UpdateHeroController();

const deleteHeroController =  new DeleteHeroController();

heroesRoutes.use("/",ensureAuthenticated);

heroesRoutes.post("/",createHeroController.handle);

heroesRoutes.get("/:id",listHeroController.handle);

heroesRoutes.get("/",listHeroController.listAll);

heroesRoutes.put("/",updateHeroController.handle);

heroesRoutes.delete("/:id",deleteHeroController.handle);

export { heroesRoutes };