import { Outlet } from "react-router-dom";
import Topnavbar from "../components/Topnavbar";
import Sidenavbar from "../components/Sidenavbar";
import "./Layout.css";

function Layout({children}) {
   return (
    <div className="app-layout">
        <Sidenavbar />

        <div className="main-column">
            <Topnavbar />

            <div className="page-content">
                <Outlet />
            </div>
        </div>
    </div>
   );
}

export default Layout;