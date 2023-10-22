import { orderActions } from "../slice/orderSlice";

export const createOrder =
    ({ items, price }) =>
    async (dispatch) => {
        dispatch(orderActions.createOrderReq());

        const res = await fetch("http://localhost:8000/orders", {
            method: "POST",
            body: JSON.stringify({ items: items, price: price }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        if (data.message !== "success") {
            dispatch(orderActions.createOrderFail(data.error));
        }
    };

export const getOrder = () => async (dispatch) => {
    dispatch(orderActions.getAllOrderReq());
    const res = await fetch("http://localhost:8000/getallorders");
    const data = await res.json();
    if (data.message === "success") {
        dispatch(orderActions.getAllOrderSuccess(data.out));
    }
    else dispatch(orderActions.getAllOrderFail(data.error));
};
