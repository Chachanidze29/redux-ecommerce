import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import Loader from "../components/loader/Loader";
import ProductContainer from "../components/styled/ProductContainer";
import ProductDescriptionContainer from "../components/styled/ProductDescriptionContainer";
import ButtonContainer from "../components/styled/ButtonContainer";
import {useDispatch} from "react-redux";
import {ADD_ITEM} from "../redux/cart/CartSlice";

const Product = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async ()=> {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(response.data);
            setLoading(false);
        }

        getProduct();
    },[productId])

    return (
        <div>
            {
                loading ?
                    <Loader/>
                    :
                    (
                        <ProductContainer>
                            <h1>{product.title}</h1>
                            <ProductDescriptionContainer>
                                <img src={product.image} />
                                <p>{product.description}</p>
                            </ProductDescriptionContainer>
                            <ButtonContainer onClick={()=>dispatch(ADD_ITEM(product))}>ADD TO CART</ButtonContainer>
                        </ProductContainer>
                    )
            }
        </div>
    )
}

export default Product;