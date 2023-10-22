import "./Cart.css";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/actions/cartactions";

export default function CartItem(props){
    const dispatch = useDispatch();
    const removeitemHandler = (event) => {
        event.preventDefault();
        dispatch(removeItem(props.id));
    };
    return(
            <div className='cart-item' key={props.id}>
                <div className='cart-product'>
                    <img src='/images/bigBurger.jpg' alt={props.name} />
                    <div>
                        <h3>{props.name}</h3>
                        <p>{props.info}</p>
                        <button onClick={removeitemHandler}>Remove</button>
                    </div>
                </div>
                <div className='cart-product-price'>₹{props.price}</div>
                <div className='cart-product-quantity'>
                    <div className='count'>{props.quantity}</div>
                </div>
                <div className='cart-product-total-price'>
                    ₹{props.price * props.quantity}
                </div>
            </div>
        )
    
}