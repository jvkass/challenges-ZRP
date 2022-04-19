import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";

import { ICreateHeroDTO } from "../../dtos/ICreateHeroDTO";
import { IUpdateHeroDTO } from "../../dtos/IUpdateHeroDTO";
import { Hero } from "../../entities/Hero";
import { IHeroesRepository } from "../IHeroesRepository";
interface IRequestDelete {
  id: string;
}
class HeroesRepository implements IHeroesRepository {
  private repository: Repository<Hero>;

  constructor() {
    this.repository = getRepository(Hero);
  }

  async create({ name, rank, location }: ICreateHeroDTO): Promise<void> {
    const hero = this.repository.create({
      name,
      rank,
      location,
    });

    await this.repository.save(hero);
  }

  async findAll(): Promise<Hero[] | undefined> {
    const heroes = await this.repository.find();
    return heroes;
  }

  async findByName(name: string): Promise<Hero | undefined> {
    const hero = await this.repository.findOne({ name });
    return hero;
  }

  async findByRank(rank: string): Promise<Hero | undefined> {
    const hero = await this.repository.findOne({ rank });
    return hero;
  }

  async findById(id: string): Promise<Hero | undefined> {
    const hero = await this.repository.findOne(id);
    return hero;
  }

  async update({
    id,
    name,
    rank,
    location,
  }: IUpdateHeroDTO): Promise<UpdateResult> {
    const updateResult = await this.repository.update(id, {
      name,
      rank,
      location,
    });

    return updateResult;
  }

  async delete(
    id
  : string): Promise<DeleteResult> {
    const deleteResult = await this.repository.delete(id);

    return deleteResult;
  }
}
export { HeroesRepository };