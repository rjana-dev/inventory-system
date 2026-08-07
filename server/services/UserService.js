const bcrypt = require("bcrypt");
const UserRepository = require("../repositories/UserRepository");
const { registerUserSchema, loginUserSchema } = require("../schemas/userSchema");

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

    async loginUser(credentials) {
        const parsed = loginUserSchema.safeParse(credentials);

        if(!parsed.success){
            const error = new Error(parsed.error.issues[0].message);
            error.statusCode = 400;
            throw error;
        }

        const {username, password } = parsed.data;

        const user = await UserRepository.findByUsername(username);

        if(!user) {
            const error = new Error("Invalid username or password");
            error.statusCode = 401;
            throw error;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

       if (!isPasswordValid) {
            const error = new Error("Invalid username or password");
            error.statusCode = 401;
            throw error;
        }

        const { password: _password, ...safeUser } = user.toObject();
        
        return safeUser;

    }

}

module.exports = new UserService();