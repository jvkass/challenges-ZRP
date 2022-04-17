import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ name, username, password }: ICreateUserDTO): Promise<void> {
        console.log(name, username, password );
        
        const userAlreadyExists = await this.usersRepository.findByUsername(username);  

        if (userAlreadyExists !== undefined) {
            throw new AppError("User already exists");
        }

        await this.usersRepository.create({
            name,
            username,
            password,
        });
    }
}

export { CreateUserUseCase };