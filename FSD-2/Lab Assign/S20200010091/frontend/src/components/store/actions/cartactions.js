import { cartActions } from "../slice/cartSlice";

export const addItem = (id, qnt) => async (dispatch, getState) => {
    let url = `http://localhost:8000/getonefooditem/:${id}`;
    const response = await fetch(url);
    const out = await response.json();

    dispatch(
        cartActions.addToCart({
            _id: out.data.item[0]._id,
            name: out.data.item[0].name,
            price: out.data.item[0].price,
            quantity: qnt,
        })
    );
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItem = (id) => async (dispatch, getState) => {
    let url = `http://localhost:8000/getonefooditem/:${id}`;
    const response = await fetch(url);
    const out = await response.json();

    dispatch(
        cartActions.removeItem({
            _id: out.data.item[0]._id,
            name: out.data.item[0].name,
            price: out.data.item[0].price,
        })
    );

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
