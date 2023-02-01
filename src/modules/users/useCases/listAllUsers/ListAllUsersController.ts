import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const IRequest = {
      user_id: request.params.userId,
    };

    let allUsers: User[];

    try {
      allUsers = this.listAllUsersUseCase.execute(IRequest);
    } catch (error) {
      return response.status(400).json(error.message);
    }

    return response.status(200).json(allUsers);
  }
}

export { ListAllUsersController };
