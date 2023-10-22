import React from 'react'
import Card from './Card';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFood } from "../store/actions/foodactions";

export default function Home() {
  const dispatch = useDispatch();
  const {foods,loading} = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(getFood());
  },[dispatch]);
  
  return (
    <div className='row m-0' style={{"paddingLeft":"140px"}}>
        {foods.length > 0 && foods.map(item => ( <Card item={item} key={item._id} />  ))}
        {loading && <p style={{"color":"white"}}>loading...</p>}
    </div>
  )
}
