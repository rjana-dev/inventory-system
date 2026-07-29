import {Routes, Route} from 'react-router-dom'

import Layout from "./layouts/Layout";

import "./App.css";
import AddProduct from "./pages/AddProduct"
import Inventory from "./pages/Inventory";
import EditProduct from "./pages/EditProduct";
import SignUp from './pages/SignUp';


function App() {
  return (
      <Routes>
        <Route element={<Layout />}>

        <Route path="/" element={<Inventory />} />

        <Route path="/products/add" element={<AddProduct />} />

        <Route path="/products/edit/:id" element={<EditProduct />} />

        <Route path="/signup" element={<SignUp />} />


        </Route>

      </Routes>
  );
}

export default App;