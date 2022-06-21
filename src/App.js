import {Routes,Route} from "react-router";
import './App.css';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Header from "./components/header/Header";

function App() {
    return (
        <Routes>
            <Route element={<Header/>}>
                <Route path='/' element={<ProductList/>}/>
                <Route path='/products/:productId' exact element={<Product/>}/>
                <Route path='/cart' element={<Cart/>} />
            </Route>
        </Routes>
    );
}

export default App;
