import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    let user: User;
    try {
      user = this.showUserProfileUseCase.execute({ user_id: id });
    } catch (error) {
      return response.status(400).json(error.message);
    }
    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
