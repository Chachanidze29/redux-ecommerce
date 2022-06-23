import React from "react";
import {CLEAR_CART} from "../../redux/cart/CartSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cartItems.selector";
import {ButtonContainer} from "../styled";

const CartListHeader = ()=> {
    const cartItemsCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();

    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <h1>Cart Items Count: {cartItemsCount}</h1>
            {cartItemsCount > 0 && <ButtonContainer onClick={()=>dispatch(CLEAR_CART())}>CLEAT CART</ButtonContainer>}
        </div>
    )
}

export default CartListHeader;