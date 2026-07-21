import "./AddProduct.css"
import infoImg from "../assets/info.png";
import imageImg from "../assets/image.png";
import moneyImg from "../assets/money.png";
import checklistImg from "../assets/checklist.jpg";
import axios from "axios";

function AddProduct() {
    return(
        <div className="add-product-page">

            <div className="page-header">
                <h1>Add New Product</h1>
                <p>Register a new stock item into warehouse alpha inventory</p>
            </div>

            <div className="main-content">

                <div className="left-column">
                    
                    <div className="card">
                        
                        <div className="card-title">
                            <img src={infoImg} alt="info-icon"></img>
                            <h2>General Information</h2>
                        </div>

                        <div className="divider"></div>

                        <div className="form-group">
                            <label for="productName">PRODUCT NAME</label>
                            <input type="text" id="productName" placeholder="e.g. Pencil HB-02"></input>
                        </div>

                        <div className="form-row">

                            <div className="form-group">
                                <label for="sku-field">SKU (Stock Keeping Unit)</label>
                                <input type="text" id="sku-field" placeholder="e.g. 000000"></input>
                            </div>

                            <div className="form-group catagory-group">
                                <label for="">CATAGORY</label>
                                <select id="catagory">
                                    <option>Stationary Goods</option>
                                    <option>Fancy Items</option>
                                    <option>Bags and Luggages</option>
                                    <option>Hardware & Electronics</option>
                                    <option>Food & Beverages</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group description-group">
                            <label for="description">DESCRIPTION</label>
                            <textarea type="text" 
                                    id="description" 
                                    placeholder="Enter detailed specification, dimensions and material composition">
                            </textarea>
                        </div>
                        

                    </div>

                    <div className="card media-card">
                        <div className="card-title">
                            <img src={imageImg} alt="media-icon"></img>
                            <h2>Media Assets</h2>
                        </div>

                        <div class="divider"></div>

                        <div className="upload-area">
                            <div className="upload-icon">

                            </div>

                            <p>Drag and drop product images here</p>

                            <span>PNG, JPG up to 10MB</span>

                            <label for="upload-media" className="browse-link">OR Browse Files</label>
                            <input type="files"
                                    id="upload-media"
                                    accept=".jpg, .png, .jpeg"
                                    hidden>
                            </input>
                        </div>

                    </div>

                </div>

                <div className="right-column">

                    <div className="card">

                        <div className="card-title">
                            <img src={moneyImg} alt="cash-icon"></img>
                            <h2>Pricing & Valuation</h2>
                        </div>

                        <div className="divider"></div>

                        <div className="form-group">
                            <label for="cost">COST PRICE (PER UNIT)</label>

                            <div className="price-input">
                                <span>LKR</span>
                                <input type="number" id="cost" placeholder="0.00"></input>
                            </div>

                        </div>

                        <div className="form-group">
                            <label for="sell">SELLING PRICE (PER UNIT)</label>

                            <div className="price-input">
                                <span>LKR</span>
                                <input type="number" id="sell" placeholder="0.00"></input>
                            </div>
                            
                        </div>

                        <div className="margin-box">

                            <div className="margin-header">
                                <span>EST. Margin</span>
                                <strong>24.5%</strong>
                            </div>

                            <div class="margin-bar">

                                <div class="margin-progress"></div>

                            </div>

                        </div>

                    </div>

                    <div className="card">
                        <div className="card-title">
                            <img src={checklistImg} alt="checklist-icon"></img>
                            <h2>Inventory Control</h2>
                        </div>

                        <div className="divider"></div>

                        <div className="form-group">
                            <label for="initial-stock">INITIAL STOCK LEVEL</label>
                            <input type="number"
                                    id="initial-stock"
                                    placeholder="0"></input>
                        </div>

                        <div className="form-group">
                            <label for="low-stock">LOW STOCK THRESHOLD</label>
                            <input type="number" 
                                    id="low-stock"
                                    placeholder="10"></input>
                            <small>System will alert when stock drops below this value.</small>
                        </div>
                    </div>

                    <div className="button-group">
                        <button className="save-btn">Save Product</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>

                </div>

            </div>

            

        </div>
    )
};

export default AddProduct;