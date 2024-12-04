const Product = require('../models/productModel');

// نمایش لیست محصولات
const listProducts = async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'مشکلی در دریافت محصولات وجود دارد.' });
  }
};

// اضافه کردن یک محصول جدید
const createProduct = async (req, res) => {
  const { name, price } = req.body;

  // اعتبارسنجی ساده
  if (!name || !price) {
    return res.status(400).json({ error: 'نام و قیمت محصول الزامی است.' });
  }

  try {
    const newProduct = await Product.addProduct(name, price);
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'مشکلی در اضافه کردن محصول وجود دارد.' });
  }
};

module.exports = {
  listProducts,
  createProduct,
};
