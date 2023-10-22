import "./App.css";
import Header from "./components/UI/Header";
import Home from "./components/UI/Home";
import Cart from "./components/UI/Cart";
import Orders from "./components/UI/Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/addorder' element={<Orders />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
