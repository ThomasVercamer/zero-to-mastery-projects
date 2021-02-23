export const addItemToCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === newItem.id);
    return !existingCartItem
        ? [...cartItems, {...newItem, quantity: 1}]
        : cartItems.map(cartItem =>
            cartItem.id === newItem.id
                ? {...cartItem, quantity: cartItem.quantity + 1} 
                : cartItem)
}