import Topnavbar from "./components/Topnavbar"
import Sidenavbar from "./components/Sidenavbar"
import AddProduct from "./pages/AddProduct"
import "../src/App.css";

function App() {
  return (
    <div className="app-layout">
        <Sidenavbar />

        <div className="main-column">
          
          <Topnavbar />

          <div className="page-content">
            <AddProduct />
          </div>
        </div>
    </div>
  );
}

export default App;