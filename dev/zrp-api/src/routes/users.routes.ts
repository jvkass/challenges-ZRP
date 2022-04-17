import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUserController } from "../modules/accounts/useCases/listUser/ListUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const listUserController = new ListUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/:id", listUserController.handle);

export { usersRoutes };