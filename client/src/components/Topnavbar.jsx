import "./Topnavbar.css";
import profileImg from "../assets/prof.jpg";
import searchImg from "../assets/search.png"
import { NavLink } from "react-router-dom";

function Topnavbar() {
    return (
        <div className="top-navbar">

            <div className = "left-navbar">
                <h3>InventorySync</h3>
            </div>

            <div className = "center-navbar">
                <img src={searchImg} alt="search-icon" className="search-icon"></img>
                <input type="text" placeholder="Search SKU, Product Name, Category"></input>
            </div>

            <div className="right-navbar">
                <span className="icon">🔔</span>
                <span className="icon">❓</span>
                <div className="signup-card">
                    <img src={profileImg} alt="profile" className="avatar"></img>
                    <NavLink to="/signup" className="signup-txt">Register User</NavLink>
                </div>
            </div>

        </div>
    )
};

export default Topnavbar;