const { z } = require("zod");

const registerUserSchema = z.object({
    fullName: z.string().trim().min(1, "Full name is required.")
                .regex(/^[A-Za-z\s]+$/, "Full name cannot contain numbers or special characters"),
    username: z.string().trim().min(3, "Username must be atleast 3 characters"),
    mobileNumber: z.string()
                    .regex(/^(07)[01245678]\d{7}$/, "Please enter a valid Sri Lankan mobile number"),
    password: z.string()
                .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, "Password must contain atleast 8 characters, including one uppercase, one number and one special character")
});

const loginUserSchema = z.object({
    username: z.string().trim().min(1, "Username field cannot be empty!"),
    password: z.string().trim().min(1, "Password field cannot be empty!")
});

module.exports = {registerUserSchema, loginUserSchema};