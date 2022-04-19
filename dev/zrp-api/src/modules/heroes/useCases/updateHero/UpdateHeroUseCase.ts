import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUpdateHeroDTO } from "../../dtos/IUpdateHeroDTO";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";

@injectable()
class UpdateHeroUseCase {
  constructor(
    @inject("HeroesRepository")
    private heroesRepository: IHeroesRepository
  ) {}

  async execute({
    id,
    name,
    rank,
    location,
  }: IUpdateHeroDTO): Promise<void> {
    const heroAlreadyExists = await this.heroesRepository.findById(id);

    if (heroAlreadyExists === undefined) {
      throw new AppError("Hero not exists");
    }

    await this.heroesRepository.update({
      id,
      name,
      rank,
      location,
    });
  }
}

export { UpdateHeroUseCase };