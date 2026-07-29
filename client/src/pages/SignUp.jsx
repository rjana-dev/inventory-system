import "./SignUp.css";

function SignUp() {
    return (
        <div className="signup-page">

            <div className="signup-container">
                <div className="card">
                    <div className="icon">📝</div>

                    <h2>Create Account</h2>
                    <p>Register to access your inventory system</p>

                    <form>
                        <label>FULL NAME</label>
                        <input type="text" placeholder="Enter your full name" />

                        <label>USERNAME</label>
                        <input type="text" placeholder="Choose a username" />

                        <label>MOBILE NUMBER</label>
                        <input type="tel" placeholder="Enter your mobile number" />

                        <label>PASSWORD</label>
                        <input type="TEXT" placeholder="Choose your password" />
                    </form>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;