import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    let user: User;
    try {
      user = this.showUserProfileUseCase.execute({ user_id });
    } catch ({ message }) {
      return response.status(404).json({ error: message });
    }
    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
