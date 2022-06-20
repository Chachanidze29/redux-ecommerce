export const addItemToCart = (cartItems, item) => {
    const existingItem = cartItems.find(cartItem => cartItem['id'] === item['id']);
    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === item.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }
    return [...cartItems, {...item, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemId) => {
    const existingItem = cartItems.find(cartItem => cartItem['id'] === itemId);
    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem['id'] !== itemId);
    }
    return cartItems.map(cartItem => cartItem['id'] === itemId ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        :
        cartItem
    )
}