import React, {useEffect} from "react";
import ProductList from "../components/ProductList";
import {useDispatch} from "react-redux";
import axios from "axios";
import {INITIALIZE} from "../redux/products/ProductsSlice";

const Home = ()=> {
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
            .then(res=>dispatch(INITIALIZE(res.data)))
    }, [dispatch])

    return (
        <div>
            <ProductList/>
        </div>
    )
}

export default Home;