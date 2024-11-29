const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service.js");

// async function updateCartItem(userId, cartItemId, cartItemData) {
//   try {
//     // Find the cart item by its ID
//     const item = await findCartItemById(cartItemId);

//     // Find the user who owns this cart item
//     const user = await userService.findUserById(item.userId);
//     if (!user) {
//       throw new Error(`User not found with ID: ${userId}`);
//     }

//     // Check if the user ID matches the cart item owner
//     if (user._id.toString() === userId.toString()) {
//       // Update the cart item with new quantity and prices
//       item.quantity = cartItemData.quantity;
//       item.price = item.quantity * item.product.price;
//       item.discountedPrice = item.quantity * item.product.discountedPrice;

//       // Save the updated cart item
//       const updatedCartItem = await item.save();
//       return updatedCartItem;
//     } else {
//       throw new Error("You cannot update this cart item.");
//     }
//   } catch (error) {
//     throw new Error(`Error updating cart item: ${error.message}`);
//   }
// }

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    // Find the cart item by its ID, with product data populated
    const item = await findCartItemById(cartItemId);

    if (!item.product || !item.product.price || !item.product.discountedPrice) {
      throw new Error("Product data is incomplete or missing.");
    }

    // Find the user who owns this cart item
    const user = await userService.findUserById(item.userId);
    if (!user) {
      throw new Error(`User not found with ID: ${userId}`);
    }

    // Check if the user ID matches the cart item owner
    if (user._id.toString() === userId.toString()) {
      // Ensure the quantity is valid
      if (typeof cartItemData.quantity !== 'number' || cartItemData.quantity <= 0) {
        throw new Error("Invalid quantity provided.");
      }

      // Update the cart item with new quantity and prices
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      // Save the updated cart item
      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You cannot update this cart item.");
    }
  } catch (error) {
    throw new Error(`Error updating cart item: ${error.message}`);
  }
}

async function findCartItemById(cartItemId) {
  try {
    // Find the cart item and populate the product field
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    if (cartItem) {
      return cartItem;
    } else {
      throw new Error(`Cart item not found with ID: ${cartItemId}`);
    }
  } catch (error) {
    throw new Error(`Error finding cart item: ${error.message}`);
  }
}


async function removeCartItem(userId, cartItemId) {
  const cartItem = await CartItem.findById(cartItemId);
  const user = await userService.findUserById(userId);

  if (user._id.toString() === cartItem.userId.toString()) {
    return await CartItem.findByIdAndDelete(cartItemId);
  }
  throw new Error("you can't remove another user's item");
}

// async function findCartItemById(cartItemId) {
//   try {
//     const cartItem = await CartItem.findById(cartItemId);
//     if (cartItem) {
//       return cartItem;
//     } else {
//       throw new Error(`Cart item not found with ID: ${cartItemId}`);
//     }
//   } catch (error) {
//     throw new Error(`Error finding cart item: ${error.message}`);
//   }
// }

module.exports = {
  updateCartItem,
  removeCartItem,
  findCartItemById,
};
