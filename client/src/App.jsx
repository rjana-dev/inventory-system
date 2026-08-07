import {Routes, Route} from 'react-router-dom'

import Layout from "./layouts/Layout";
import ProtectedRoute from './routes/ProtectedRoute';

import "./App.css";
import AddProduct from "./pages/AddProduct"
import Inventory from "./pages/Inventory";
import EditProduct from "./pages/EditProduct";
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';


function App() {
  return (
      <Routes>
        
        <Route path="/" element={<LandingPage />} />

        <Route element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                  }>

        <Route path="/inventory" element={<Inventory />} />

        <Route path="/products/add" element={<AddProduct />} />

        <Route path="/products/edit/:id" element={<EditProduct />} />

        <Route path="/signup" element={<SignUp />} />

        </Route>

      </Routes>
  );
}

export default App;