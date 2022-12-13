const Product = require('../models/Product');

// Get All Product
const product_get_all = async (req, res) => {
    try {
        const productsList = await Product.find();
        res.json(productsList).status(200);

    } catch (err) {
        res.json({ message: err }).status(404);
    };
};

// Create New Product
const product_post = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    try {
        const createProduct = await product.save();
        res.json(createProduct).status(201);

    } catch (err) {
        res.json({ message: err }).status(404);
    };
};

// Update Product Information
const product_patch = async (req, res) => {
    try {
        await Product.updateOne({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            }
        });
        res.json({ message: 'Product successfully updated!' }).status(200);

    } catch (err) {
        res.json({ error: err }).status(404);
    };
};

// Delete Product
const product_delete = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.json({ error: 'Product not found' }).status(404);

        } else {
            product.deleteOne();
            res.json('Product successfully deleted!').status(202);
        };

    } catch (err) {
        res.json({ message: err }).status(404);
    };
};

module.exports = {
    product_get_all,
    product_post,
    product_patch,
    product_delete
}