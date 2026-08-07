const UserService = require("../services/UserService");

class UserController{

    async registerUser(req, res) {
        try{
            const user = await UserService.createUser(req.body);

            res.status(201).json({
                message: "User registered successfully.",
                user
            });
        } catch (error) {
            res.status(error.stausCode || 500).json({
                error: error.message
            });
        }
    }

    async loginUser(req, res) {
        try{
            const user = await UserService.loginUser(req.body);

            res.status(200).json({
                message: "Login successful.",
                user
            });
        } catch (error) {
            res.status(error.stausCode || 500).json({
                error: error.message
            });
        }
    }
}

module.exports = new UserController();