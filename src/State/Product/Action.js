import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE } from "./ActionType";

// export const findProducts = (reqData) => async (dispatch) => {
//     dispatch({type:FIND_PRODUCTS_REQUEST})
//   const {
//     colors,
//     sizes,
//     minPrice,
//     maxPrice,
//     minDiscount,
//     category,
//     stock,
//     sort,
//     pageNumber,
//     pageSize,
//   } = reqData;
//   try {
//     const { data } = await api.get(
//       `/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
//     )

//     // const { data } = await api.get(
//     //   `/products?category=mens_kurta&color=Beige`
//     // )

//     // /products?category=mens_kurta&size=L&minPrice=500&maxPrice=5000

   
//     console.log("product data", data)

//     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
//   }
// };


export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
  } = reqData;

  const queryParams = new URLSearchParams();

  if (colors) queryParams.append('colors', colors);
  if (sizes) queryParams.append('size', sizes);
  if (minPrice) queryParams.append('minPrice', minPrice);
  if (maxPrice) queryParams.append('maxPrice', maxPrice);
  if (minDiscount) queryParams.append('minDiscount', minDiscount);
  if (category) queryParams.append('category', category);
  if (stock) queryParams.append('stock', stock);
  if (sort) queryParams.append('sort', sort);
  if (pageNumber) queryParams.append('pageNumber', pageNumber);
  if (pageSize) queryParams.append('pageSize', pageSize);

  try {
      console.log(`Request URL: /products?${queryParams.toString()}`);
      const { data } = await api.get(`/products?${queryParams.toString()}`);
      console.log("product data", data);


      dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};


// export const findProductsById = (reqData) => async (dispatch) => {
//     dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
//     const {productId} = reqData;
//     try {
//       const { data } = await api.get(`products/id/${productId}`);
//       console.log("data", data);
  
//       dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
//     }
//   };

export const findProductsById = (productId) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

  try {
    const { data } = await api.get(`/products/id/${productId}`);
    console.log("data", data);

    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

