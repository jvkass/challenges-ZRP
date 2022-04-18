import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListHeroUseCase } from "./ListHeroUseCase";

class ListHeroController {
  async handle(request: Request, response: Response): Promise<Response> {
    console.log(request);
    const { id } = request.params;

    const listHeroUseCase = container.resolve(ListHeroUseCase);

    const hero = await listHeroUseCase.execute({
      id,
    });

    return response.status(200).send(hero);
  }

  async listAll(request: Request, response: Response): Promise<Response> {
    console.log(request);

    const listHeroUseCase = container.resolve(ListHeroUseCase);

    const heroes = await listHeroUseCase.executeListAll();

    return response.status(200).send(heroes);
  }
}

export { ListHeroController };