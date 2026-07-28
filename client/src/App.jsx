import {Routes, Route} from 'react-router-dom'
import Topnavbar from "./components/Topnavbar"
import Sidenavbar from "./components/Sidenavbar"
import AddProduct from "./pages/AddProduct"
import Inventory from "./pages/Inventory";
import EditProduct from "./pages/EditProduct";
import Layout from "./layouts/Layout";
import "./App.css";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </Layout>
  );
}

export default App;