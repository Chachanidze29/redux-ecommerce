import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectProductItems,
    selectProductItemsError,
    selectProductItemsLoading
} from "../redux/products/products.selector";
import {fetchProducts} from "../redux/products/ProductsSlice";
import {Link} from "react-router-dom";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProductItems);
    const isLoading = useSelector(selectProductItemsLoading);
    const error = useSelector(selectProductItemsError);

    useEffect(()=> {
        dispatch(fetchProducts());
    },[dispatch])

    return (
        <div>
            <h1>Hello World</h1>
            {
                error ?
                    <h1>Error {error}</h1>
                    :
                    isLoading ?
                        <h1>Loading</h1>
                        :
                        products.map(product => (
                            <Link to={`/products/${product.id}`} key={product.id}>
                                <div>
                                    <p>{product.title}</p>
                                    <img src={product.image}/>
                                    <p>{product.description}</p>
                                    <p>{product.price}</p>
                                </div>
                            </Link>
                        ))
            }
        </div>
    )
}

export default ProductList;