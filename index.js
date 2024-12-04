const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const pool = require('./db');
const dotenv = require('dotenv');
const path = require('path');

// بارگذاری متغیرهای محیطی
dotenv.config({
  override: true,
  path: path.join(__dirname, 'development.env'),
});

// میدلور برای تجزیه JSON
app.use(express.json());

// استفاده از روتر محصولات
app.use('/products', productRoutes);

// تست اتصال به پایگاه داده هنگام راه‌اندازی سرور
(async () => {
  try {
    const { rows } = await pool.query('SELECT current_user');
    const currentUser = rows[0]['current_user'];
    console.log(`اتصال موفق به پایگاه داده با کاربر: ${currentUser}`);
  } catch (err) {
    console.error('خطا در اتصال به پایگاه داده:', err);
  }
})();

// شروع به کار سرور
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`سرور در پورت ${PORT} در حال اجرا است.`);
});
