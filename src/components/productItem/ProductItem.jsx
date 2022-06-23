import React from "react";
import {Link} from "react-router-dom";
import {ButtonContainer, ProductContainer, ProductInfoContainer} from "../styled";
import {ADD_ITEM} from "../../redux/cart/CartSlice";
import {useDispatch} from "react-redux";

const ProductItem = ({product}) => {
    const dispatch = useDispatch();

    return (
        <ProductContainer key={product.id}>
            <Link to={`/products/${product.id}`}>
                <p>{product.title}</p>
                <img src={product.image}/>
                <ProductInfoContainer>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </ProductInfoContainer>
            </Link>
            <ButtonContainer onClick={()=>dispatch(ADD_ITEM(product))}>Add To Cart</ButtonContainer>
        </ProductContainer>
    )
}

export default ProductItem;