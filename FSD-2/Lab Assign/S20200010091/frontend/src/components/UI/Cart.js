import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { createOrder } from "../store/actions/orderactions";
import { useNavigate } from "react-router-dom";
export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let cartTotalAmount = 0;
    cartItems.forEach((c) => {
        cartTotalAmount += c.price * c.quantity;
    });

    const checkOutHandler = (e) => {
        e.preventDefault();
        dispatch(createOrder({ items: cartItems, price: cartTotalAmount }));
        setTimeout(() => {
            navigate("/addorder");
        }, 1000);
    };

    return (
        <div className='cart-container'>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div className='cart-empty'>
                    <p>Your cart is currently empty</p>
                    <div className='start-shopping'>
                        <a href='/'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='currentColor'
                                className='bi bi-arrow-left'
                                viewBox='0 0 16 16'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
                                />
                            </svg>
                            <span>Start Shopping</span>
                        </a>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='titles'>
                        <h3 className='product-title'>Product</h3>
                        <h3 className='price'>Price</h3>
                        <h3 className='quantity'>Quantity</h3>
                        <h3 className='total'>Total</h3>
                    </div>
                    <div className='cart-items'>
                        {cartItems &&
                            cartItems.map((item) => (
                                <CartItem id={item._id} name={item.name} price={item.price} quantity={item.quantity} />
                            ))}
                    </div>
                    <div className='cart-summary'>
                        <div className='cart-checkout'>
                            <div className='subtotal'>
                                <span>Subtotal</span>
                                <span className='amount'>₹{cartTotalAmount}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                            
                            <button onClick={checkOutHandler}>Check out</button>

                            <div className='continue-shopping'>
                                <a href='/'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='20'
                                        height='20'
                                        fill='currentColor'
                                        className='bi bi-arrow-left'
                                        viewBox='0 0 16 16'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
                                        />
                                    </svg>
                                    <span>Continue Shopping</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
