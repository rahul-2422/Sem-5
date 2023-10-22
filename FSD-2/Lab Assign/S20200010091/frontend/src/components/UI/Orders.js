import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../store/actions/orderactions";
export default function Order() {
    const dispatch = useDispatch();

    const { orders } = useSelector((state) => state.order);
    useEffect(() => {
        dispatch(getOrder());
    }, [dispatch]);

    return (
        <div className='cart-container'>
            <h2>Your Orders</h2>
                <div>
                    <div className='orderbox'>
                        <div className='oder-titles'>
                            <h3 className='product-title'>Order Id</h3>
                            <h3 className='price'>Products</h3>
                            <h3 className='total'>Total Price</h3>
                        </div>
                        <div className='cart-items'>
                            {orders &&
                                orders.allorders.map((order) => (
                                    <div className=' cart-item order-item' key={order._id}>
                                        <h5 className='m-0' style={{ width: "100px" }}>
                                            {order._id}
                                        </h5>
                                        <div className='cart-product order-product'>
                                            {order.items &&
                                                order.items.map((item) => (
                                                    <div className='product-item' key={item._id}>
                                                        <img src='/images/bigBurger.jpg' alt={item.name} />
                                                        <div>
                                                            <h3>{item.name}</h3>
                                                            <p style={{ marginBottom: "0" }}>₹{item.price}</p>
                                                            <p>Quantity: {item.quantity}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className='cart-product-total-price'>₹{order.price}</div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className='cart-summary'>
                        <div className='cart-checkout'>
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
        </div>
    );
}
