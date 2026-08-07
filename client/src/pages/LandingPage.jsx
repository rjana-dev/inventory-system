import "./LandingPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoImg from "../assets/inventorysync.png"
import { loginUser } from "../api/userApi";
import { loginSession } from "../auth/auth";

function LandingPage() {

    const navigate  = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange= (e) => {
        const { id, value } = e.target;
        const field = id === "welcome-username" ? "username" : "password";
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await loginUser(formData);
            loginSession(response.data.user);
            navigate("/inventory");
        } catch (err) {
            const errorMessage =
                err.response?.data?.error || "Failed to sign in!";
            setError(errorMessage);
        }
    };

    return(
        <div className="landing-page-container">
            <div className="left-partition">
                <div className="left-head">
                    <img src={LogoImg} alt="Logo"></img>
                    <h1> Inventory Sync</h1>
                </div>
               <h3>Your pocket friendly Inventory Management System</h3>
            </div>
            <div className="right-partition">
                <div className="welcome-container">
                    <h2>Sign in</h2>
                    <p>Enter credentials to continue</p>

                    <form onSubmit={handleSubmit}>
                        <label for="welcome-username">Username</label>
                        <input type="text" 
                                id="welcome-username" 
                                placeholder="Eg: johndoe-001"
                                value={formData.username}
                                onChange={handleChange}></input>

                        <label for="welcome-password">Password</label>
                        <input type="password" 
                                id="welcome-password" 
                                placeholder="Eg: abxxxx"
                                value={formData.password}
                                onChange={handleChange}></input>
                        
                        {error && <span className="field-error">{error}</span>}

                        <div className="rem-me">
                            <input type="checkbox" id="remember-me"></input>
                            <label for="remember-me">Remember me</label>
                       </div>

                        <button className="sign-in-btn"> SIGN IN</button>
                    </form>
                    
                    <div className="reset-pwd">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;