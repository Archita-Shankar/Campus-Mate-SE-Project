import { api } from "../../config/apiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

// export const getCart = () => async (dispatch) => {
//   dispatch({ type: GET_CART_REQUEST });

//   try {
//     const { data } = await api.get(`/cart`);
//     dispatch({ type: GET_CART_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: GET_CART_FAILURE, payload: error.message });
//   }
// };

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get(`/cart`); // Expect `data` to include `cartItems`
    dispatch({ type: GET_CART_SUCCESS, payload: data });
    console.log("cart: ", data)
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};

export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  try {
    const { data } = await api.put("/cart/add", reqData);
    console.log("add item to cart: ", data);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};

export const removeCartItem = (cartItemId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    // const { data } = await api.delete(`/cartItems/${cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
  }
};


// export const updateCartItem = (reqData) => async (dispatch) => {
//   dispatch({ type: UPDATE_CART_ITEM_REQUEST });

//   try {
//     const { data } = await api.put(
//       `/cartItems/${reqData.cartItemId}`,
//       reqData.data
//     );
//     dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
//   }
// };


export const updateCartItem = (reqData) => async (dispatch) => {
  console.log('Updating cart item with ID:', reqData.cartItemId);  // Check this value
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.put(
      `/cartItems/${reqData.cartItemId}`,
      reqData.data
    );
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};

// export const updateCartItem = (reqData) => async (dispatch) => {
//   console.log('Updating cart item with payload:', reqData); // Debug log

//   dispatch({ type: UPDATE_CART_ITEM_REQUEST });

//   try {
//     // Make the API call to update the cart item
//     const { data } = await api.put(
//       `/cartItems/${reqData.cartItemId}`,
//       reqData.data
//     );

//     // Dispatch the success action with the response data
//     dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });

//     // Optionally, you can fetch the updated cart after the update
//     // dispatch(getCart());
//   } catch (error) {
//     // Handle both client-side and server-side errors
//     const errorMessage = error.response?.data?.message || error.message;

//     console.error('Error updating cart item:', errorMessage); // Debug error log
//     dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: errorMessage });
//   }
// };
