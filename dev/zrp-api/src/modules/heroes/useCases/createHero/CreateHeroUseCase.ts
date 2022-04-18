import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateHeroDTO } from "../../dtos/ICreateHeroDTO";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";

@injectable()
class CreateHeroUseCase {
    constructor(
        @inject("HeroesRepository")
        private heroesRepository: IHeroesRepository
    ) { }

    async execute({ name, rank, location }: ICreateHeroDTO): Promise<void> {
        console.log(name, rank, location );
        
        const heroAlreadyExists = await this.heroesRepository.findByName(name);  

        if (heroAlreadyExists !== undefined) {
            throw new AppError("Hero already exists");
        }

        await this.heroesRepository.create({
            name,
            rank,
            location,
        });
    }
}

export { CreateHeroUseCase };