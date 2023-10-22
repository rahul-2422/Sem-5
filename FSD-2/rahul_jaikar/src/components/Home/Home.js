import './Home.css';
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import Footer from '../Footer/Footer';
import ReactStars from "react-rating-stars-component";
import {  faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Home(props) {
    const { countCartItems,onAdd, data, isPending, error } = props
    useEffect(() => {
        Aos.init({ duration: 1800 });
    }, [])
    const rating ={
        size:20,
        count:5,
        color:"grey",
        activeColor:"orange",
        value:3.5,
        a11y:true,
        isHalf:true,
        emptyIcon:<FontAwesomeIcon icon={faStar}/>,
        halfIcon:<FontAwesomeIcon icon={faStarHalfStroke}/>,
        filledIcon:<FontAwesomeIcon icon={faStar}/>
    }
    return (
        <div>
            <div className="navbar">
                <div className="heading"><h2>Hungry?</h2></div>
                <Link to="/viewcart" className="cart">
                    View Cart{' '}
                    {countCartItems?(
                        <button className="cartitemscount">{countCartItems}</button>
                    ):""}
                </Link>
                {/* <div className="cart"><button>View Cart</button></div> */}
            </div>
            <center><h1 className="category_heading"><b>Shop By Category :</b></h1></center>
            <div className="category">

            </div>
            <section className="category" id="category">
                <div className="box-container">
                    <div data-aos='zoom-in-right' className="box">
                        <h2>Tiffins</h2>
                        <p>upto 50% off</p>
                        <img src="/Images/tiffins.jpg" alt="" />
                        <Link to="/search/tiffins" className="shop_btn">Shop Now</Link>
                    </div>
                    <div data-aos='zoom-in-up' className="box">
                        <h2>Veg Meals</h2>
                        <p>upto 44% off</p>
                        <img src="/Images/veg.webp" alt="" />
                        <Link to="/search/veg-meals" className="shop_btn">Shop Now</Link>
                    </div>
                    <div data-aos='zoom-in-left' className="box">
                        <h2>Non-Veg Meals</h2>
                        <p>upto 35% off</p>
                        <img src="/Images/nonveg.jpeg" alt="" />
                        <Link to="/search/non-veg-meals" className="shop_btn">Shop Now</Link>
                    </div>

                </div>

            </section>
            <div className="fooditems">
                <center><h1 className="category_heading"><b>Most viewed food items : </b></h1></center>
                <div className="fooditembox-container">
                    {error && <h1>error</h1>}
                    {isPending && <h1 style={{ fontSize: "30px" }}>Loading .......</h1>}
                    {data && data.map(item => (
                        <div  className="fooditembox" key={Math.random()}>
                            <div className="fooditemblock">
                                <div className="fooditemimagepart"></div>
                                    <img src={item.img} alt="" />
                                    <span className="discount" style={{ fontSize: "14px" }}>
                                        {(((item.mrp - item.price) / item.mrp) * 100).toFixed(1)}<br />Off
                                    </span>
                                <div className="description">
                                    <p>{item.description}</p>
                                </div>
                                <div className="fooditemdetailspart">
                                    <h3>{item.name}</h3>
                                    <div className="stars"><ReactStars {...rating} /></div>
                                    <div className="price"> Rs {item.price}/- <span> Rs {item.mrp}/- </span> </div>
                                    <Link to="/checkoutpage" className="buynow_btn">Order Now</Link><br />
                                    <button className="addToCart_btn" onClick={(e) => onAdd(e, item)}>Add To Cart</button>

                                    {/* <form> */}
                                    {/* <div className="quantity">
                                            <span>quantity : </span>
                                            <input type="number" name="quantity" min="1" max="1000" defaultValue="1" />
                                        </div> */}
                                    {/* <Link to="/checkoutpage" className="buynow_btn">Buy Now</Link><br />

                                        <div style={{ display: "none" }}>
                                            <input type="text" name="name" defaultValue={item.name} />
                                            <input type="text" name="productId" defaultValue={item._id} />
                                            <input type="Number" name="price" defaultValue={item.price} />
                                            <input type="Number" name="mrp" defaultValue={item.mrp} />
                                            <input type="text" name="img" defaultValue={item.img} />
                                        </div>
                                        <button className="addToCart_btn" onClick={()=>onAdd(item)}>Add To Cart</button>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>

    )
}
