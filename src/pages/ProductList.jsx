import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectProductItems,
    selectProductItemsError,
} from "../redux/products/products.selector";
import {fetchProducts} from "../redux/products/ProductsSlice";
import Loader from "../components/loader/Loader";
import {ProductListContainer} from "../components/styled";
import ProductItem from "../components/productItem/ProductItem";

const ProductList = () => {
    const products = useSelector(selectProductItems);
    const error = useSelector(selectProductItemsError);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch])

    return (
        <ProductListContainer>
            {
                error ?
                    <h1>Error {error}</h1>
                    :
                    products.length === 0 ?
                        <Loader/>
                        :
                        products.map(product => <ProductItem key={product.id} product={product} />)
            }
        </ProductListContainer>
    )
}

export default ProductList;