import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";

interface IRequest {
    id: string;
}

interface IResponseHero {
    hero: IHero
}

interface IResponseHeroes {
    heroes: IHero[]
}

interface IHero {
    id: string;
    name: string;
    rank: string;
    location: ILocation;
}

interface ILocation {
    lat: number;
    lng: number;
}

@injectable()
class ListHeroUseCase {
    constructor(
        @inject("HeroesRepository")
        private heroesRepository: IHeroesRepository
    ) { }

    async execute({ id }: IRequest): Promise<IResponseHero> {
        const hero = await this.heroesRepository.findById(id);

        if (hero === undefined) {
            throw new AppError("Hero not exists");
        }

        const userReturn: IResponseHero = {
            hero: {
                id: hero!.id,
                name: hero!.name,
                rank: hero!.rank,
                location: hero!.location,
            },
        };

        return userReturn;
    }

    async executeListAll(): Promise<IResponseHeroes> {
        const heroes = await this.heroesRepository.findAll();

        if (heroes === undefined) {
            throw new AppError("Hero not exists");
        }

        const userReturn: IResponseHeroes = {
            heroes
        };

        return userReturn;
    }
}

export { ListHeroUseCase };