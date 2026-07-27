import Topnavbar from "../components/Topnavbar";
import Sidenavbar from "../components/Sidenavbar";
import "./Layout.css";
import AddProduct from "../pages/AddProduct";

function Layout({children}) {
    return
    {
        <div className="app-layout">
            <Topnavbar />

            <div className="main-column">
                <Sidenavbar />

                <div className="page-content">
                    {children}
                </div>

            </div>
        </div>
    }
};