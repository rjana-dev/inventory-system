import "./SignIn.css";

function SignIn() {
    return (
        <div className="signin-page">
            <div className="container">
                <div className="login-card">
                    <div className="icon">🔒</div>

                    <h2>Sign In</h2>
                    <p>Access your inventory dashboard</p>

                    <div className="form">
                        <label for="username">USERNAME</label>
                        <input
                            type="text" 
                            id="username"
                            placeholder="Enter your ID or email"
                        />

                        <label for="password">PASSWORD</label>
                        <input
                            type="text" 
                            id="password"
                            placeholder="Enter your Password"
                        />

                        <div className="password-header">
                            <label>PASSWORD</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;