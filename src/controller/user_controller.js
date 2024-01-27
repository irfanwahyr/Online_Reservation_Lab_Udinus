import user_service from "../service/user_service"

const register = (req, res, next) => {
    try {
        const result = user_service.register(req.body);
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

export default {
    register
}