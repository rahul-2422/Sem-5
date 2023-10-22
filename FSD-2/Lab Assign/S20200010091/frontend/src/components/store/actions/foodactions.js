import { foodActions } from "../slice/foodSlice";

export const getFood=()=> async (dispatch)=>{
    dispatch(foodActions.getAllfoodreq());
    const res = await fetch('http://localhost:8000/getallfooditems');
    const data = await res.json();

    if(data.message==="successful"){
        dispatch(foodActions.getAllfoodsuccess(data.food.fooditems))
    }
    else{
        dispatch(foodActions.getAllfoodfail(data.error))
    }
}