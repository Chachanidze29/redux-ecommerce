import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {selectProductItems} from "../redux/products/products.selector";
import {useSelector} from "react-redux";

const Product = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState([]);
    const products = useSelector(selectProductItems);

    useEffect(()=>{
        const res = products.filter(product => product.id == productId)[0];
        setProduct(res);
    },[productId, products])

    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    )
}

export default Product;