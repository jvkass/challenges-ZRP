import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateHeroUseCase } from "./UpdateHeroUseCase";

class UpdateHeroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, rank, location } = request.body;

    const updateUserUseCase = container.resolve(UpdateHeroUseCase);

    await updateUserUseCase.execute({
      id,
      name,
      rank,
      location,
    });

    return response.status(201).send();
  }
}

export { UpdateHeroController };