const bcrypt = require("bcrypt");
const UserRepository = require("../repositories/UserRepository");

class UserService {

    async createUser(userData) {
        const{
            fullName,
            username,
            mobileNumber,
            password
        } = userData;

        const existingUsername = await UserRepository.findByUsername(username);

        if(existingUsername) {
            const error = new Error(
                `Username "${username}" is already in taken.`
            );

            error.statusCode = 409;
            throw error;
        }

        const mobileRegex = /^(07)[01245678]\d{7}$/;

        if (!mobileRegex.test(mobileNumber)) {
            const error = new Error (
                "Please enter a valid Sri Lankan mobile number."
            );

            error.statusCode = 400;
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

        const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if (!passwordRegex.test(password)) {
            const error = new Error(
                "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
            );

            error.statusCode = 400;
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            ...userData,
            password: hashedPassword
        };

        return await UserRepository.create(newUser);

    }

}

module.exports = new UserService();