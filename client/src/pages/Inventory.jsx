import "./Inventory.css";
import downloadImg from "../assets/download.jpg";
import addImg from "../assets/add.png"

function Inventory() {
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
                    <span className="stat-value">1,284</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Low Stock Alerts</span>
                    <span className="stat-value stat-warning">14</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Stock Value</span>
                    <span className="stat-value">Rs. 2.4M</span>
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
                    <tr>
                        <td className="sku">LP-99230</td>
                        <td><a href="#" className="product-link">Quantum Forklift Battery 48V</a></td>
                        <td>Maintenance</td>
                        <td><span className="stock-pill stock-green"><span className="dot"></span>84 Units</span></td>
                        <td className="price">Rs. 1,240.00</td>
                        <td className="actions-col"><button className="action-btn" aria-label="Actions Button">⋮</button></td>
                    </tr>
                    <tr>
                        <td className="sku">LP-11422</td>
                        <td><a href="#" className="product-link">Industrial Pallet Wrap (6pk)</a></td>
                        <td>Packaging</td>
                        <td><span className="stock-pill stock-yellow"><span className="dot"></span>12 Units</span></td>
                        <td className="price">Rs. 89.99</td>
                        <td className="actions-col"><button className="action-btn" aria-label="Actions Button">⋮</button></td>
                    </tr>
                    <tr>
                        <td className="sku">LP-55610</td>
                        <td><a href="#" className="product-link">Heavy Duty Steel Rack B1</a></td>
                        <td>Storage</td>
                        <td><span className="stock-pill stock-red"><span className="dot"></span>0 Units</span></td>
                        <td className="price">Rs. 450.00</td>
                        <td className="actions-col"><button className="action-btn" aria-label="Actions Button">⋮</button></td>
                    </tr>
                    <tr>
                        <td className="sku">LP-00192</td>
                        <td><a href="#" className="product-link">Barcode Scanner Wireless Z3</a></td>
                        <td>Electronics</td>
                        <td><span className="stock-pill stock-green"><span className="dot"></span>142 Units</span></td>
                        <td className="price">Rs. 120.45</td>
                        <td className="actions-col"><button className="action-btn" aria-label="Actions Button">⋮</button></td>
                    </tr>
                    <tr>
                        <td className="sku">LP-88394</td>
                        <td><a href="#" className="product-link">Ergonomic Safety Gloves (M)</a></td>
                        <td>Safety Gear</td>
                        <td><span className="stock-pill stock-green"><span className="dot"></span>250 Units</span></td>
                        <td className="price">Rs. 12.50</td>
                        <td className="actions-col"><button className="action-btn" aria-label="Actions Button">⋮</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="table-footer">
                <span className="entries-label">Showing 1 to 6 of 1,284 entries</span>
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