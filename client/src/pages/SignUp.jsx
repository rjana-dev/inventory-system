import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registerUser } from "../api/userApi";
import { registerUserSchema} from "../schemas/userSchema";

function SignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        mobileNumber: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = registerUserSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = {};
            result.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            });

            setErrors(fieldErrors);
            return;
        }

        setErrors({});

        try {
            const response = await registerUser(formData);
            alert("Account created successfully!");
            navigate("/");
        } catch (error) {
            const errorMessage =
                error.response?.data?.error || "Failed to create account!";
            alert(errorMessage);
        }
    };


    return (
        <div className="signup-page">

            <div className="signup-container">
                <div className="signup-component-card">
                    <div className="signup-img-icon">📝</div>

                    <h2>Create Account</h2>
                    <p>Register to access your inventory system</p>

                    <form onSubmit={handleSubmit}>
                        <label>FULL NAME</label>
                        <input 
                            type="text" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name" />
                        {errors.fullName && <span className="field-error">{errors.fullName}</span>}

                        <label>USERNAME</label>
                        <input 
                            type="text" 
                            name="username"
                            value={formData.username}
                            onChange={handleChange}  
                            placeholder="Choose a username" />
                        {errors.username && <span className="field-error">{errors.username}</span>}

                        <label>MOBILE NUMBER</label>
                        <input 
                            type="tel" 
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="Enter your mobile number" />
                        {errors.mobileNumber && <span className="field-error">{errors.mobileNumber}</span>}

                        <label>PASSWORD</label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Choose your password" />
                        {errors.password && <span className="field-error">{errors.password}</span>}
                            
                            <button type="submit" className="signup-btn">Sign Up</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default SignUp;