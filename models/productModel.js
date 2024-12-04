const pool = require('../db');

const getAllProducts = async () => {
  const res = await pool.query('SELECT * FROM products');
  return res.rows;
};

const addProduct = async (name, price) => {
  const res = await pool.query(
    'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
    [name, price]
  );
  return res.rows[0];
};

module.exports = {
  getAllProducts,
  addProduct,
};
