import React from "react";
import { useState } from "react";
import "./Card.css";
import { addItem } from "../store/actions/cartactions";
import { useDispatch } from "react-redux";

export default function Card(props) {
    const dispatch = useDispatch();
    const { _id, name, info, price } = props.item;
    const [qnt, setQnt] = useState(1);

    const addToCartHandler = (event) => {
        event.preventDefault();
        dispatch(addItem(_id, qnt));
    };
    const handleAddItem = () => {
        setQnt((qnt) => {
            return qnt + 1;
        });
    };
    const handleRemoveItem = () => {
        setQnt((qnt) => {
            if (qnt === 0) return qnt;
            return qnt - 1;
        });
    };

    return (
        <div className='item className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3" ' key={_id}>
            <div className='item-head_desc'>
                <p className='head_desc-name'>{name}</p>
                <p className='head_desc-info'>
                    <small>{info}</small>
                </p>
            </div>
            <div className='item-foot_desc'>
                <span className='foot_desc-price'>₹{price}</span>
                <div className='btnAddRemove'>
                    <div className='btnAddRemove-positive'>
                        <i className='fa fa-minus' onClick={handleRemoveItem}></i>
                        <span> {qnt}</span>
                        <i className='fa fa-plus' onClick={handleAddItem}></i>
                    </div>
                </div>
            </div>
            <button className='addcart' onClick={addToCartHandler}>ADD TO CART</button>
        </div>
    );
}
