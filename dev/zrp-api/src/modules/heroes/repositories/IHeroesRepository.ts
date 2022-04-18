
import { UpdateResult } from "typeorm";
import { ICreateHeroDTO } from "../dtos/ICreateHeroDTO";
import { IUpdateHeroDTO } from "../dtos/IUpdateHeroDTO";
import { Hero } from "../entities/Hero";

interface IHeroesRepository {
  create(data: ICreateHeroDTO): Promise<void>;
  findByName(name: string): Promise<Hero | undefined>;
  findByRank(rank: string): Promise<Hero | undefined>;
  findById(id: string): Promise<Hero | undefined>;
  update(data: IUpdateHeroDTO): Promise<UpdateResult>;
}

export { IHeroesRepository };