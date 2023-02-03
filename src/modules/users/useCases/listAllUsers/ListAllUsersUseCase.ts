import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error(`List All: User ${user_id} not found`);
    }

    if (!user.admin) {
      throw new Error(`User ${user.name} nao e Admin.`);
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
