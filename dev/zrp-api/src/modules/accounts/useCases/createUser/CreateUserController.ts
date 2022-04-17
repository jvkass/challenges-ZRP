import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, password } = request.body;

    console.log(name, username, password );

    const createUserUseCase = container.resolve(CreateUserUseCase);

    console.log('Deu certo' );

    await createUserUseCase.execute({
      name,
      username,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };