const User = require("../models/User");

class UserRepository{

    async create(userData) {
        const user = new User(userData);
        return await user.save();
    }

    async findByUsername(username) {
        return await User.findOne({ username });
    }

    async findByMobileNumber(mobileNumber) {
        return await User.findOne({ mobileNumber });
    }

    async findById(id) {
        return await User.findById(id);
    }
}

module.exports = new UserRepository();