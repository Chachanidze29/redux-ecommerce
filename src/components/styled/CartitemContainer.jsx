import styled from "styled-components";

const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
  
    img {
        flex-basis: 40%;
        max-width: 20%;
    }
  
    div {
        flex-basis: 40%;
    }
`

export default CartItemContainer;