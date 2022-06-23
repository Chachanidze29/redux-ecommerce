import React from "react";
import {ADD_ITEM, CLEAR_ITEM, REMOVE_ITEM} from "../../redux/cart/CartSlice";
import {useDispatch} from "react-redux";
import {ButtonContainer, CartItemContainer, ButtonsWrapper} from "../styled";

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    return (
        <CartItemContainer>
            <img style={{maxWidth:"20%"}} src={item.image}/>
            <div>
                <h1>{item.title}</h1>
                <p>Price: ${item.price}</p>
                <ButtonsWrapper>
                    <p>Quantity: {item.quantity}</p>
                    <ButtonContainer onClick={() => dispatch(ADD_ITEM(item))}>&#62;</ButtonContainer>
                    <ButtonContainer onClick={() => dispatch(CLEAR_ITEM(item))}>X</ButtonContainer>
                    <ButtonContainer onClick={() => dispatch(REMOVE_ITEM(item.id))}>&#60;</ButtonContainer>
                </ButtonsWrapper>
            </div>
        </CartItemContainer>
    )
}

export default CartItem;