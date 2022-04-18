import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateHeroUseCase } from "./CreateHeroUseCase";

class CreateHeroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, rank, location } = request.body;

    const createHeroUseCase = container.resolve(CreateHeroUseCase);

    await createHeroUseCase.execute({
      name,
      rank,
      location,
    });

    return response.status(201).send();
  }
}

export { CreateHeroController };