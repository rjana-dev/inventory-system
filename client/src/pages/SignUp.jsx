import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registerUser } from "../api/userApi";

function SignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        mobileNumber: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            console.log("User registered:", response.data);
            alert("Account created successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error registering user:", error);
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

                        <label>USERNAME</label>
                        <input 
                            type="text" 
                            name="username"
                            value={formData.username}
                            onChange={handleChange}  
                            placeholder="Choose a username" />

                        <label>MOBILE NUMBER</label>
                        <input 
                            type="tel" 
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="Enter your mobile number" />

                        <label>PASSWORD</label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Choose your password" />

                                                <button type="submit" className="signup-btn">Sign Up</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default SignUp;