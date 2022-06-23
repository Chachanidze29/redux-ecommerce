import React from "react";
import {Outlet} from "react-router-dom";
import {selectCartItemsCount} from "../../redux/cart/cartItems.selector";
import {useSelector} from "react-redux";
import {CartLinkContainer, LinkContainer, MainContainer, NavContainer} from "../styled";

const Header = ()=> {
    const count = useSelector(selectCartItemsCount);

    return (
        <MainContainer>
            <NavContainer>
                <LinkContainer to='/'>Home</LinkContainer>
                <CartLinkContainer>
                    <LinkContainer to='/cart'>Cart</LinkContainer>
                    <p>{count === 0 ? '' : count}</p>
                </CartLinkContainer>
            </NavContainer>
            <Outlet/>
        </MainContainer>

    )
}

export default Header;