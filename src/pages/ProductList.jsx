import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectProductItems,
    selectProductItemsError,
    selectProductItemsLoading
} from "../redux/products/products.selector";
import {Link} from "react-router-dom";
import {fetchProducts} from "../redux/products/ProductsSlice";
import ProductListContainer from "../components/styled/ProductListContainer";
import Loader from "../components/loader/Loader";
import ProductContainer from "../components/styled/ProductContainer";
import ProductInfoContainer from "../components/styled/ProductInfoContainer";
import ButtonContainer from "../components/styled/ButtonContainer";
import {ADD_ITEM} from "../redux/cart/CartSlice";
import {selectCartItems} from "../redux/cart/cartItems.selector";

const ProductList = () => {
    const products = useSelector(selectProductItems);
    const isLoading = useSelector(selectProductItemsLoading);
    const error = useSelector(selectProductItemsError);
    const dispatch = useDispatch();

    const cart = useSelector(selectCartItems);

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch])

    return (
        <ProductListContainer>
            {
                error ?
                    <h1>Error {error}</h1>
                    :
                    isLoading ?
                        <Loader/>
                        :
                        products.map(product => (
                            <ProductContainer key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                        <p>{product.title}</p>
                                        <img src={product.image}/>
                                        <ProductInfoContainer>
                                            <p>{product.description}</p>
                                            <p>{product.price}</p>
                                        </ProductInfoContainer>
                                </Link>
                                <ButtonContainer onClick={()=>dispatch(ADD_ITEM(product))}>Add To Cart</ButtonContainer>
                            </ProductContainer>
                        ))
            }
        </ProductListContainer>
    )
}

export default ProductList;