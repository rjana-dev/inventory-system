import React, {useState} from "react";
import "./AddProduct.css"
import infoImg from "../assets/info.png";
import imageImg from "../assets/image.png";
import moneyImg from "../assets/money.png";
import checklistImg from "../assets/checklist.jpg";
import { createProduct } from "../api/productApi";
import { useNavigate } from "react-router-dom";
import { productSchema } from "../schemas/productSchema";

function AddProduct() {
    
    const navigate = useNavigate();

    const [formData, setformData] = useState ({
        name: "",
        costPrice: "",
        price: "",
        sku: "",
        description: "",
        category: "",
        initialStockLevel: "",
        lowStockLevel: 10
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setformData({
        ...formData,
        [name]: value
    });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = productSchema.safeParse(formData);

        if(!result.success){
            const fieldErrors = {};
            result.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});

        try {
            const response = await createProduct(result.data);

            console.log("Product created:", response.data);

            alert("Product added successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error creating product:", error);

            const errorMessage = error.response?.data?.error || "Failed to add product!";

            alert(errorMessage);
        }
    };

    return(
        <div className="add-product-page">

            <div className="page-header">
                <h1>Add New Product</h1>
                <p>Register a new stock item into warehouse alpha inventory</p>
            </div>

            <form onSubmit={handleSubmit}>
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
                                <input type="text" 
                                        id="productName" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Pencil HB-02"/>
                                        {errors.name && <span className="field-error">{errors.name}</span>}
                            </div>

                            <div className="form-row">

                                <div className="form-group">
                                    <label for="sku-field">SKU (Stock Keeping Unit)</label>
                                    <input type="text" 
                                            id="sku-field" 
                                            name="sku"
                                            value={formData.sku}
                                            onChange={handleChange}
                                            placeholder="e.g. 000000"></input>
                                            {errors.sku && <span className="field-error">{errors.sku}</span>}
                                </div>

                                <div className="form-group catagory-group">
                                    <label for="">CATEGORY</label>
                                    <select id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}>
                                        <option value="">Select Category</option>
                                        <option value="Stationary Goods">Stationary Goods</option>
                                        <option value="Fancy Items">Fancy Items</option>
                                        <option value="Bags & Luggages">Bags & Luggages</option>
                                        <option value="Hardware & Electronics">Hardware & Electronics</option>
                                        <option value="Food & Beverages">Food & Beverages</option>
                                    </select>
                                    {errors.category && <span className="field-error">{errors.category}</span>}
                                </div>
                            </div>

                            <div className="form-group description-group">
                                <label for="description">DESCRIPTION</label>
                                <textarea type="text" 
                                        id="description" 
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Enter detailed specification, dimensions and material composition">
                                </textarea>
                                {errors.description && <span className="field-error">{errors.description}</span>}
                            </div>
                            

                        </div>

                        <div className="card media-card">
                            <div className="card-title">
                                <img src={imageImg} alt="media-icon"></img>
                                <h2>Media Assets</h2>
                            </div>

                            <div className="divider"></div>

                            <div className="upload-area">
                                <div className="upload-icon">

                                </div>

                                <p>Drag and drop product images here</p>

                                <span>PNG, JPG up to 10MB</span>

                                <label for="upload-media" className="browse-link">OR Browse Files</label>
                                <input type="file"
                                        id="upload-media"
                                        accept=".jpg, .png, .jpeg"
                                        hidden/>
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
                                    <input type="number" 
                                            id="cost" 
                                            name="costPrice"
                                            value={formData.costPrice}
                                            onChange={handleChange}
                                            placeholder="0.00"></input>
                                </div>
                                {errors.costPrice && <span className="field-error">{errors.costPrice}</span>}

                            </div>

                            <div className="form-group">
                                <label for="sell">SELLING PRICE (PER UNIT)</label>

                                <div className="price-input">
                                    <span>LKR</span>
                                    <input type="number" 
                                            id="sell" 
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="0.00"></input>
                                </div>
                                {errors.price && <span className="field-error">{errors.price}</span>}
                                
                            </div>

                            <div className="margin-box">

                                <div className="margin-header">
                                    <span>EST. Margin</span>
                                    <strong>24.5%</strong>
                                </div>

                                <div className="margin-bar">

                                    <div className="margin-progress"></div>

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
                                        name="initialStockLevel"
                                        value={formData.initialStockLevel}
                                        onChange={handleChange}
                                        placeholder="0"></input>
                                        {errors.initialStockLevel && <span className="field-error">{errors.initialStockLevel}</span>}
                            </div>

                            <div className="form-group">
                                <label for="low-stock">LOW STOCK THRESHOLD</label>
                                <input type="number" 
                                        id="low-stock"
                                        name="lowStockLevel"
                                        value={formData.lowStockLevel}
                                        onChange={handleChange}
                                        placeholder="10"></input>
                                        {errors.lowStockLevel && <span className="field-error">{errors.lowStockLevel}</span>}
                                <small>System will alert when stock drops below this value.</small>
                            </div>
                        </div>

                        <div className="button-group">
                            <button type="submit" 
                                className="save-btn">
                                Save Product
                            </button>
                        </div>

                    </div>

                </div>
            </form>

            

        </div>
    )
};

export default AddProduct;