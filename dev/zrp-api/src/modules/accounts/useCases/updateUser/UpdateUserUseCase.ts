import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    id,
    name,
    username,
    password,
  }: IUpdateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findById(id);

    if (userAlreadyExists === undefined) {
      throw new AppError("User not exists");
    }

    await this.usersRepository.update({
      id,
      name,
      username,
      password,
    });
  }
}

export { UpdateUserUseCase };