import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./EditProduct.css"
import infoImg from "../assets/info.png";
import imageImg from "../assets/image.png";
import moneyImg from "../assets/money.png";
import checklistImg from "../assets/checklist.jpg";
import { getProductById, updatedProduct } from "../api/productApi";
import { productSchema } from "../schemas/productSchema";

function EditProduct() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductById(id);
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSave = async (e) => {
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
            await updatedProduct(id, result.data);

            alert("Product updated successfully!");

            navigate("/inventory");
        } catch (error) {
            console.error("Error updating product:", error);

            const errorMessage = error.response?.data?.error || "Failed to add product!";

            alert(errorMessage);
        }
    };

    if (loading) {
        return <div className="edit-product-page">Loading...</div>;
    }

    return(
        <div className="edit-product-page">

            <div className="page-header">
                <h1>Edit Product Details</h1>
                <p>Edit & Update the pre-existing product details to the Inventory</p>
            </div>

            <form onSubmit={handleSave}>
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
                                <input
                                    type="text"
                                    id="productName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="field-error">{errors.name}</span>}
                            </div>

                            <div className="form-row">

                                <div className="form-group">
                                    <label for="sku-field">SKU (Stock Keeping Unit)</label>
                                    <input
                                        type="text"
                                        id="sku-field"
                                        name="sku"
                                        value={formData.sku}
                                        onChange={handleChange}
                                    />
                                    {errors.sku && <span className="field-error">{errors.sku}</span>}
                                </div>

                                <div className="form-group catagory-group">
                                    <label for="category">CATEGORY</label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                    >
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
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Enter detailed specification, dimensions and material composition"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
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
                                <div className="upload-icon"></div>
                                <p>Drag and drop product images here</p>

                                <span>PNG, JPG up to 10MB</span>

                                <label for="upload-media" className="browse-link">OR Browse Files</label>
                                <input type="file" id="upload-media" accept=".jpg, .png, .jpeg" hidden/>

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
                                    <input
                                        type="number"
                                        id="cost"
                                        name="costPrice"
                                        value={formData.costPrice}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.costPrice && <span className="field-error">{errors.costPrice}</span>}

                            </div>

                            <div className="form-group">
                                <label for="sell">SELLING PRICE (PER UNIT)</label>

                                <div className="price-input">
                                    <span>LKR</span>
                                    <input
                                        type="number"
                                        id="sell"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.price && <span className="field-error">{errors.price}</span>}

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
                                <input
                                    type="number"
                                    id="initial-stock"
                                    name="initialStockLevel"
                                    value={formData.initialStockLevel}
                                    onChange={handleChange}
                                />
                                {errors.initialStockLevel && <span className="field-error">{errors.initialStockLevel}</span>}
                            </div>

                            <div className="form-group">
                                <label for="low-stock">LOW STOCK THRESHOLD</label>
                                <input
                                    type="number"
                                    id="low-stock"
                                    name="lowStockLevel"
                                    value={formData.lowStockLevel}
                                    onChange={handleChange}
                                />
                                <small>System will alert when stock drops below this value.</small>
                                {errors.lowStockLevel && <span className="field-error">{errors.lowStockLevel}</span>}
                            </div>

                        </div>

                        <div className="button-group">
                            <button type="submit" className="save-btn"> Save Product </button>
                        </div>

                    </div>

                </div>
            </form>

        </div>
    )
};

export default EditProduct;