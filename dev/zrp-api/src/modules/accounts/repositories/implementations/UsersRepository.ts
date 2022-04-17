import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, username, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
    });

    await this.repository.save(user);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ username });
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }

}
export { UsersRepository };