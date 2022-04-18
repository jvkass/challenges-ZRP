import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { IHeroesRepository } from "../../modules/heroes/repositories/IHeroesRepository";
import { HeroesRepository } from "../../modules/heroes/repositories/implementations/HeroesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IHeroesRepository>(
  "HeroesRepository",
  HeroesRepository
);