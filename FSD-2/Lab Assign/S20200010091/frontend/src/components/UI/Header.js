import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    return (
        <nav style={{backgroudColor: "#041c56 !important"}} className='navbar navbar-expand-lg bg-dark'>
            <div className='container'>
                <Link to='/' className='navbar-brand' style={{ fontWeight: "bold" }}>
                    {/* <img style={{ width: "40px", marginRight: "10px" }} alt="food" src='/images/peach.png' /> */}
                    <i class="fa-solid fa-utensils me-2"></i>
                    SOMATO
                </Link>

                <Link to='/cart' className='btn btn-outline-light'>
                    <i className='fa-solid fa-cart-shopping'></i>
                    Cart
                    <span className='badge bg-dark text-white ms-1 rounded-pill'>{cartItems.length}</span>
                </Link>
            </div>
        </nav>
    );
}
