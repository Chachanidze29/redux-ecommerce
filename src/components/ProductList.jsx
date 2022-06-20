import React from "react";
import {useSelector} from "react-redux";
import {selectProductItems} from "../redux/products/products.selector";

const ProductList = () => {
    const products = useSelector(selectProductItems);

    return (
        <div>
            {
                products.map(product => (
                    <div key={product.id}>
                        <p>{product.title}</p>
                        <img src={product.image}/>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList;