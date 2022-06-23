import React from "react";
import {useSelector} from "react-redux";
import {selectCartItems} from "../redux/cart/cartItems.selector";
import CartItem from "../components/cartItem/CartItem";
import {CartListContainer} from "../components/styled";
import CartListHeader from "../components/cartListHeader/CartListHeader";

const Cart = ()=> {
    const cartItems = useSelector(selectCartItems);

    return (
        <CartListContainer>
            <CartListHeader/>
            {
                cartItems.map(item => <CartItem key={item.id} item={item} />)
            }
        </CartListContainer>
    )
}

export default Cart;