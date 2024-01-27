import { express } from "express";
import user_controller from "../controller/user_controller";

const publicRouter = new express.Router();

publicRouter.post('/api/users', user_controller.register);


export {
    publicRouter
}