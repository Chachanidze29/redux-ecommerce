import React from "react";
import {Outlet} from "react-router-dom";
import MainContainer from "../styled/MainContainer";
import NavContainer from "../styled/NavContainer";
import LinkContainer from "../styled/LinkContainer";
import {selectCartItemsCount} from "../../redux/cart/cartItems.selector";
import {useSelector} from "react-redux";
import CartLinkContainer from "../styled/CartLinkContainer";

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