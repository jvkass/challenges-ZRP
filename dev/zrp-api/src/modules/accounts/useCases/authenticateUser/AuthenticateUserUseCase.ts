import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    username: string;
    password: string;
}

interface IResponse {
    user: {
        id: string;
        name: string;
        username: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByUsername(username);

        if (!user) {
            throw new AppError("Username or password incorrect");
        }

        if (user.password !== password) {
            throw new AppError("Email ou senha incorrect");
        }

        const token = sign({}, "451909515652da74f9f3c5a8184d7ff3", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                id: user.id,
                name: user.name,
                username: user.username,
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };