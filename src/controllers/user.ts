import Express, { Request, Response } from 'express';
import { HttpStatus } from '../enums/httpStatus';
import { IOperationResult } from '../interfaces/actionResult';
import { IController } from '../interfaces/controller';
import { IUserRegistrationBody } from '../interfaces/userRegistrationBody';

class UserController implements IController{
    private path = '/user';
    public router = Express.Router();

    constructor() {
        this.configureRoutes();
    }

    private configureRoutes() {
        this.router.post(`${this.path}/register`, this.register);
        this.router.post(`${this.path}/login`, this.login);
    }

    private register(req: Request<{}, any, IUserRegistrationBody>, res: Response<IOperationResult<void>>) {
        if (!req.body.username || !req.body.email || !req.body.password) {
            res.status(HttpStatus.BadRequest).json({
                success: false,
                message: `Insufficient parameters to complete request`
            });
        }

        // TODO: Create the user
    }

    private login(req: Request, res: Response) {
        // TODO: Query user based on login key (username)
        let user = {};

        // TODO: Verify user based on provided password

        // TODO: Return a JWT upon success
        res.send({});
    }
}

export default UserController;