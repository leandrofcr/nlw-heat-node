import { Request, Response } from 'express';
import { AuthenticateUserUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    const service = new AuthenticateUserUserService();
    const result = await service.execute(code)

    return res.json(result);
  }
}

export { AuthenticateUserController };
