const productService = require("../services/product.service.js");

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

// const findProductById = async (req, res) => {
//   const productId = req.params.id;
//   try {
//     const product = await productService.findProductById(productId);
//     return res.status(201).send(product);
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }
// };

// const findProductById = async (req, res) => {
//   const { productId } = req.params;
//   console.log("Product ID received:", productId); // Debug log

//   try {
//     const product = await productService.findProductById(productId);
//     if (!product) {
//       console.log("Product not found for ID:", productId);
//       return res.status(404).send({ error: "Product not found" });
//     }
//     console.log("Product fetched successfully:", product);
//     return res.status(200).send(product);
//   } catch (error) {
//     console.error("Error fetching product:", error); // Log full error
//     return res.status(500).send({ error: "Internal Server Error" });
//   }
// };

const findProductById = async (req, res) => {
  const productId = req.params.productId; // Fix to use the correct parameter name
  try {
    const product = await productService.findProductById(productId);

    if (!product.discountedPercent && product.price && product.discountedPrice) {
      product.discountedPercent = Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      );
    }

    return res.status(200).send(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).send({ error: error.message });
  }
};



const getAllProducts = async (req, res) => {
  const productId = req.params.id;
  try {
    const products = await productService.getAllProducts(req.query);
    return res.status(201).send(products);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const createMultipleProducts = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.createMultipleProducts(req.body);
    return res.status(201).send({ message: "Products Created Sccessfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  createMultipleProducts,
  findProductById,
};
