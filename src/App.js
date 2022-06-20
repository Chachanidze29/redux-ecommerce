import {Routes,Route} from "react-router";
import './App.css';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
    return (
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/products/:productId' exact element={<Product/>}/>
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    );
}

export default App;
