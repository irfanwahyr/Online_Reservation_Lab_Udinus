import { prismaclient } from "../app/database";
import { ResponseError } from "../error/response_error";
import { registerUserValidation } from "../validation/user_validation";
import { validate } from "../validation/validation";
import { bcrypt } from "bcrypt";

const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await prismaclient.user.count({
        where: {
            id: user.id
        }
    });

    if (countUser == 1){
        throw new ResponseError(400, "user already exist")
    }

    user.password = await bcrypt.hash(user.password, 10);

    return result = prismaclient.user.create({
        data: user,
        select: {
            id: true,
            username: true,
            email: true
        }
    });
}

export default {
    register
}