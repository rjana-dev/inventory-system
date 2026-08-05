const bcrypt = require("bcrypt");
const UserRepository = require("../repositories/UserRepository");
const { registerUserSchema } = require("../schemas/userSchema");

class UserService {

    async createUser(userData) {
        const parsed =registerUserSchema.safeParse(userData);

        if(!parsed.success) {
            const error = new Error(parsed.error.issue[0].message);
            error.statusCode = 400;
            throw error;
        }

        const{
            fullName,
            username,
            mobileNumber,
            password
        } = parsed.data;

        const existingUsername = await UserRepository.findByUsername(username);

        if(existingUsername) {
            const error = new Error(
                `Username "${username}" is already in taken.`
            );

            error.statusCode = 409;
            throw error;
        }

        const existingMobile = await UserRepository.findByMobileNumber(mobileNumber);

        if(existingMobile) {
            const error = new Error(
                "This mobile number is already registered."
            );

            error.statusCode = 409;
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            fullName, 
            username,
            mobileNumber,
            password: hashedPassword
        };

        return await UserRepository.create(newUser);

    }

}

module.exports = new UserService();