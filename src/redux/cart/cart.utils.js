export const addItemToCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === newItem.id);
    return !existingCartItem
        ? [...cartItems, {...newItem, quantity: 1}]
        : cartItems.map(cartItem =>
            cartItem.id === newItem.id
                ? {...cartItem, quantity: cartItem.quantity + 1} 
                : cartItem)
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    if(itemToRemove.quantity === 1) return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    return cartItems.map(cartItem => cartItem.id !== itemToRemove.id ? cartItem : { ...cartItem, quantity: cartItem.quantity - 1});
}