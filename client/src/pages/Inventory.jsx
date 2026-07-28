import { useNavigate } from 'react-router-dom';
import "./Inventory.css";
import downloadImg from "../assets/download.jpg";
import addImg from "../assets/add.png"
import {useEffect, useState} from "react";
import axios from "axios";

function Inventory() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const [openMenu, setOpenMenu] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8888/api/products"
            );

            setProducts(response.data);

            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    };

    const toggleMenu = (id) => {
        
        if ( openMenu === id ) {
            setOpenMenu(null);
        } else {
            setOpenMenu(id);
        }
    };

    const handleEdit = (product) => {
        navigate(`/products/edit/${product._id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete =window.confirm("Are you sure want to delete this product?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:8888/api/products/${id}`);
            fetchProducts();
            setOpenMenu(null);
        }
        catch (error) {
            console.error("Error deleting product:", error);
            alert("Failed to delete product!");
        }
    };

    useEffect(() => {

        fetchProducts();

    },[]);



    return(
        <div className="inventory-page">
            
            <header className="page-header">
                <div className="header-left">
                    <h1>Inventory List</h1>
                    <small>Showing all products across all categories</small>
                </div>

                <div className="header-right">
                    <button className="btn export-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5V10.5M8 10.5L4.5 7M8 10.5L11.5 7M2.5 13.5H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        Export CSV
                    </button>
                    <button className="btn new-product-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                        New Product</button>
                </div>
            </header>

            <div className="filter-card">
                <div className="filter-left">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3H14L9.5 8.5V13L6.5 11.5V8.5L2 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round-cap" /></svg>
                    <span className="filter-label">FILTER BY:</span>
                    <select className="filter-option">
                        <option>All Categories</option>
                        <option>Fancy Goods</option>
                        <option>Stationery Items</option>
                    </select>
                </div>

                <div className="filter-right">
                    <span className="applied-label">Applied : None</span>
                    <a href="#" className="clear-filter">Clear All</a>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card stat-card-primary">
                    <span className="stat-label">Total Products</span>
                    <span className="stat-value">
                        {products.length}
                    </span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Low Stock Alerts</span>
                    <span className="stat-value stat-warning">
                        {
                            products.filter(
                                p => p.initialStockLevel <= p.lowStockLevel
                            ).length
                        }
                    </span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Stock Value</span>
                    <span className="stat-value">Rs. 
                        {
                            products.reduce((total, products) => total + (products.price * products.initialStockLevel),
                        0
                        ).toLocaleString()
                        }
                    </span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Active Pickers</span>
                    <span className="stat-value">32 <span class="stat-pill">+4 today</span></span>
                </div>
            </div>

            <div className="table-card">
                <table className="inventory-table">
                    <thead>
                    <tr>
                        <th>SKU</th>
                        <th>PRODUCT NAME</th>
                        <th>CATEGORY</th>
                        <th>STOCK LEVEL</th>
                        <th>PRICE</th>
                        <th className="actions-col">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>

                        {products.map((product) => (
                    
                            <tr key={product._id}>
                                <td className="sku">
                                    {product.sku}
                                </td>

                                <td>
                                    <span className="product-link">
                                        {product.name}
                                    </span>
                                </td>

                                <td>
                                    {product.category}
                                </td>

                                <td>
                                    <span className={`stock-pill ${
                                        product.initialStockLevel ===0 
                                        ? "stock-red"
                                        : product.initialStockLevel <= product.lowStockLevel
                                        ? "stock-yellow"
                                        : "stock-green"
                                    }`}>
                                        <span className="dot"></span>

                                        {product.initialStockLevel} Units
                                    </span>
                                </td>

                                <td className="price">
                                    Rs. {Number(product.price).toFixed(2)}
                                </td>

                                <td className="actions-col">
                                    <div className="action-menu">
                                        <button className="action-btn"
                                                onClick={() => toggleMenu(product._id)}>
                                            ⋮
                                        </button>

                                        {openMenu === product._id && (
                                            <div className="dropdown-menu">
                                                <button className="dropdown-item"
                                                        onClick={() => handleEdit(product)}>
                                                    Edit
                                                </button>

                                                <button className="dropdown-item delete"
                                                        onClick={() => handleDelete(product._id)}>
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>

            <div className="table-footer">
                <span className="entries-label">Showing 1 to {products.length} of {products.length} entries</span>
                <div className="pagination">
                <button className="page-btn" disabled>Previous</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <span className="page-ellipsis">…</span>
                <button className="page-btn">214</button>
                <button className="page-btn">Next</button>
                </div>
            </div>

        </div>
        
    )
};

export default Inventory;