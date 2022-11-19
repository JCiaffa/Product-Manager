const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

// get all
module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

//get one
module.exports.getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

//update
module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedProduct) => response.json(updatedProduct))
    .catch((err) => response.json(err));
};

//get one and create
module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

//delete
module.exports.deleteProduct = (req, res) => {
  Product.findOneAndDelete({ _id: req.params.id })
    .then((deletedProduct) => res.json(deletedProduct))
    .catch((err) => res.status(400).json(err));
};
