import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.status(200).json(user);
    } catch ({ message }) {
      return response.status(404).json({ error: message });
    }
  }
}

export { ShowUserProfileController };
