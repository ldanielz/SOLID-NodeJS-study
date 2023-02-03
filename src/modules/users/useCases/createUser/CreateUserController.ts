import { Response, Request } from "express";
import { User } from "modules/users/model/User";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const newUser = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(newUser);
    } catch ({ message }) {
      return response.status(400).json({ error: message });
    }
  }
}

export { CreateUserController };
