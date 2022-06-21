import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";

const Product = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        const getProduct = async ()=> {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(response.data);
        }

        getProduct();
    },[productId])

    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    )
}

export default Product;