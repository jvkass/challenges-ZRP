import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteHeroUseCase } from "./DeleteHeroUseCase";

class DeleteHeroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserUseCase = container.resolve(DeleteHeroUseCase);

    await deleteUserUseCase.execute(
      id
    );

    return response.status(201).send();
  }
}

export { DeleteHeroController };