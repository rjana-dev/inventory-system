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
                    <a href="#" className="menu-item">Dashboard</a>
                    <a href="#" className="menu-item active">Add Products</a>
                    <a href="#" className="menu-item">Update Products</a>
                    <a href="#" className="menu-item">Inventory</a>
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