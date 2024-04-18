
const productModel = require('../models/productsModel.js')


const getAllProducts = async (req, res) => {
  const data = await productModel.find();
  console.log(data);
  console.log(req.url)
  res.json({
    status: "Sucess",
    results: 0,
    data: {
      products: [],
    },
  });
};



const addProduct = async (req, res) => {
  try {
    const data = await productModel.create(req.body);
    console.log(data)
    res.json({
      status: 'sucess',
      results: 1,
      data: {
        products: data,
      }
    })
  } catch (err) {
    console.log(err)

  }
}

module.exports = {
  getAllProducts,
  addProduct,
};
