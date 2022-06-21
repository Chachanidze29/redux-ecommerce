import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems, selectCartItemsCount} from "../redux/cart/cartItems.selector";
import CartListContainer from "../components/styled/CartListContainer";
import CartItemContainer from "../components/styled/CartitemContainer";
import ButtonsWrapper from "../components/styled/ButtonsWrapper";
import ButtonContainer from "../components/styled/ButtonContainer";
import {ADD_ITEM, CLEAR_CART, CLEAR_ITEM, REMOVE_ITEM} from "../redux/cart/CartSlice";

const Cart = ()=> {
    const cartItems = useSelector(selectCartItems);
    const cartItemsCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();

    return (
        <CartListContainer>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <h1>Cart Items Count: {cartItemsCount}</h1>
                {cartItemsCount > 0 && <ButtonContainer onClick={()=>dispatch(CLEAR_CART())}>CLEAT CART</ButtonContainer>}
            </div>
            {
                cartItems.map(item => (
                    <CartItemContainer key={item.id}>
                        <img src={item.image} />
                        <div>
                            <h1>{item.title}</h1>
                            <p>Price: ${item.price}</p>
                            <ButtonsWrapper>
                                <p>Quantity: {item.quantity}</p>
                                <ButtonContainer onClick={()=>dispatch(ADD_ITEM(item))}>&#62;</ButtonContainer>
                                <ButtonContainer onClick={()=>dispatch(CLEAR_ITEM(item))}>X</ButtonContainer>
                                <ButtonContainer onClick={()=>dispatch(REMOVE_ITEM(item.id))}>&#60;</ButtonContainer>
                            </ButtonsWrapper>
                        </div>
                    </CartItemContainer>
                ))
            }
        </CartListContainer>
    )
}

export default Cart;