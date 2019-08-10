export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        // specific cartItem exists so just increase quantity  
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
        // Return original cartItem
        : cartItem
      )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};