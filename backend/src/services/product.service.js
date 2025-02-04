const Category = require("../models/category.model.js");
const Product = require("../models/product.model");

async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });

    await topLevel.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });

    await secondLevel.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });

    await thirdLevel.save();
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountedPercent: reqData.discountedPercent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.size,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });

  return await product.save();
}

async function deleteProduct(productId) {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);
  return "Product deleted successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(id) {
  const product = await Product.findById(id).populate("category").exec();

  if (!product) {
    throw new Error("Product not found with id: "+ id);
  }
  return product;
}

async function getAllProducts(reqQuery) {
  let {
    category,
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize
  } = reqQuery;

  // pageNumber = pageNumber || 1;
  // pageSize = pageSize || 10;

  pageNumber = parseInt(pageNumber) || 1;
  pageSize = parseInt(pageSize) || 10;


  let query = Product.find().populate("category");

  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      query = query.where("category").equals(existCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }

  // if (colors) {
  //   const colorSet = new Set(colors.split(",").map(colors => colors.trim().toLowerCase()));

  //   const colorRegex =colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

  //   query = query.where("color").regex(colorRegex);
  // }

  if (colors) {
    const colorSet = new Set(colors.split(",").map(color => color.trim().toLowerCase()));
    if (colorSet.size > 0) {
        const colorRegex = new RegExp([...colorSet].join("|"), "i");
        query = query.where("color").regex(colorRegex);
    }
}


  if (sizes) {
    const sizesSet = new Set(sizes.split(",").map(size => size.trim()));
    query = query.where("sizes.name").in([...sizesSet]);
}

  if (minPrice && maxPrice) {
    // query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    if (minPrice) query = query.where("discountedPrice").gte(minPrice);
    if (maxPrice) query = query.where("discountedPrice").lte(maxPrice);

  }
  if (minDiscount) {
    query = query.where("discountedPercent").gt(minDiscount);
  }

  if (stock) {
    if (stock === "in_stock") {
      query = query.where("quantity").gt(0);
  } else if (stock === "out_of_stock") {
      query = query.where("quantity").lte(0);
  }
  }

  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    // query = query.where.sort({ discountedPrice: sortDirection });
    query = query.sort({ discountedPrice: sortDirection });
  }

  // const totalProducts = await Product.countDocuments(query);
  // const totalProducts = await Product.countDocuments(query.getFilter());

  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);

  // const products = await query.exec();
  // const products = await Product.find({}).populate("category").exec();

  const totalProducts = await Product.countDocuments(query.getFilter());
  const products = await query.skip(skip).limit(pageSize).exec();



  const totalPages = Math.ceil(totalProducts / pageSize);

  console.log("Received Query Parameters:", reqQuery);

  return { content: products, currentPage: pageNumber, totalPages };
}



async function createMultipleProducts(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProducts,
};
