import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    username: string;
  };
}

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ id }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findById(id);

    if (user === undefined) {
      throw new AppError("User not exists");
    }

    const userReturn: IResponse = {
      user: {
        id: user!.id,
        name: user!.name,
        username: user!.username,
      },
    };

    return userReturn;
  }
}

export { ListUserUseCase };