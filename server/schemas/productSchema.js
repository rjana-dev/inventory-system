const { z } = require("zod");

const productSchema = z.object({
    name: z.string().trim().min(1, "Product name is required."),
    sku: z.string().trim().min(1, "SKU is required"),
    description: z.string().trim().optional(),
    category: z.enum([
        "",
        "Stationary Goods",
        "Fancy Items",
        "Bags & Luggages",
        "Hardware & Electronics",
        "Food & Beverages"
    ]).optional(),
    costPrice: z.coerce.number({ error: "Cost price must be a number." }).min(0, "Cost price cannot be negative."),
    price: z.coerce.number({ error: "Selling price must be a number." }).min(0, "Selling price cannot be negative."),
    initialStockLevel: z.coerce.number({ error: "Initial stock level must be a number." }).min(0, "Stock level cannot be negative."),
    lowStockLevel: z.coerce.number().min(0).default(10)
}).refine((data) => data.price > data.costPrice, {
    message: "Selling price must be higher than cost price.",
    path: ["price"]
});

module.exports = { productSchema };