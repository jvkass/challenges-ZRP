import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IHeroesRepository } from "../../repositories/IHeroesRepository";

interface IRequest {
    id: string;
}

@injectable()
class DeleteHeroUseCase {
  constructor(
    @inject("HeroesRepository")
    private heroesRepository: IHeroesRepository
  ) {}

  async execute(
    id
  : string): Promise<void> {
    const heroAlreadyExists = await this.heroesRepository.findById(id);

    if (heroAlreadyExists === undefined) {
      throw new AppError("Hero not exists");
    }

    await this.heroesRepository.delete(id);
  }
}

export { DeleteHeroUseCase };