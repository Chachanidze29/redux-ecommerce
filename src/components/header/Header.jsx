import React from "react";
import {Outlet} from "react-router-dom";
import MainContainer from "../styled/MainContainer";
import NavContainer from "../styled/NavContainer";
import LinkContainer from "../styled/LinkContainer";

const Header = ()=> (
    <MainContainer>
        <NavContainer>
            <LinkContainer to='/'>Home</LinkContainer>
            <LinkContainer to='/cart'>Cart</LinkContainer>
        </NavContainer>
        <Outlet/>
    </MainContainer>

)

export default Header;