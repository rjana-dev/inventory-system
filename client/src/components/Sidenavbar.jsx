import {NavLink} from 'react-router-dom';
import "./Sidenavbar.css";
import profileImg from "../assets/prof.jpg";
import logoutImg from "../assets/logout.jpg";


function Sidenavbar() {
    return (
        <div className="container">

            <aside className="side-navbar">

                <div className="logo">
                    <h2>Logistics Pro</h2>
                    <p>Warehouse alpha</p>
                </div>

                <nav className="menu">
                    <NavLink to="/dashboard" className="menu-item">Dashboard</NavLink>
                    <NavLink to="/products/add" className="menu-item">Add Products</NavLink>
                    <NavLink to="/" className="menu-item" end>Inventory</NavLink>
                    <NavLink to="/users" className="menu-item">Users</NavLink>
                </nav>

                <div className="lower-navbar">
                    <div className="user">
                        <img src={profileImg} alt="user"></img>
                        <div className="user-details">
                            <h3>Jananganan</h3>
                            <p>Admin</p>
                        </div>
                    </div>
                   
                   <a href="#" className="menu-item">Settings</a>
                   <a href="#" className="menu-item logout">Logout</a>
                </div>
            </aside>
        </div>
    )
};

export default Sidenavbar;