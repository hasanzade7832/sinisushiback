const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// مسیر برای دریافت لیست محصولات
router.get('/', productController.listProducts);

// مسیر برای اضافه کردن محصول جدید
router.post('/', productController.createProduct);

module.exports = router;
