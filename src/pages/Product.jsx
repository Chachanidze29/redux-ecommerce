import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {useDispatch} from "react-redux";
import {ADD_ITEM} from "../redux/cart/CartSlice";
import {ButtonContainer, ProductContainer, ProductDescriptionContainer} from "../components/styled";
import Loader from "../components/loader/Loader";

const Product = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const [error,setError] = useState('');
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        const getProduct = async ()=> {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setProduct(response.data);
        }

        getProduct().catch(err=>setError(err.message));
    },[productId])

    return (
        <div>
            {
                    product.length === 0 ?
                    <Loader/>
                    :
                    error ?
                    <h1 style={{textAlign:"center"}}>{error}</h1>
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