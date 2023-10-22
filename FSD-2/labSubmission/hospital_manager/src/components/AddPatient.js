import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddPatient.css";
import { submitUserform } from "../store/actions/userform-actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const UserForm = () => {
    const [data, setData] = useState({
        gender: "",
        age: "",
        problems: "",
        weight: "",
        bmi: "",
    });

    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(submitUserform(data));
        setData({
            gender: "",
            age: "",
            problems: "",
            weight: "",
            bmi: "",
        })
        // console.log(data);
    };
    return (
        <>
            <img src='/form_background.png' alt='' />
            {/* <Link style={{ position: "relative", color: "white", padding: "2%" }} className='mb-3 pad' to='/surveylist'>
                Go to survey list
            </Link> */}
            <div className='form'>
                <h2 style={{ textAlign: "center", paddingTop: "2%" }} className='textColor'>Survey Form</h2>
                <Form onSubmit={submitHandler} method='POST'>
                    <Form.Group className='mb-3 pad'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>Gender</Form.Label>
                        <Form.Control 
                            name='gender' 
                            type='text' 
                            placeholder='Enter Gender' 
                            value={data.gender}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3 pad'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>Age</Form.Label>
                        <Form.Control
                            name='age'
                            type='text'
                            placeholder='Enter Cuisine'
                            value={data.age}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3 pad'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>Weight</Form.Label>
                        <Form.Control
                            name='weight'
                            type='text'
                            placeholder='Enter Weight of patient'
                            value={data.weight}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3 pad'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>BMI</Form.Label>
                        <Form.Control
                            name='bmi'
                            type='text'
                            placeholder='Enter Patients BMI'
                            value={data.bmi}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3 pad' controlId='formBasicPassword'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>Symptoms</Form.Label>
                        <Form.Control
                            name='porblems'
                            type='text'
                            placeholder='Enter Patients Symptoms'
                            value={data.coffeefreq}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <Button variant='dark' type='submit' style={{ marginLeft: "41%", color: 'white'}}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default UserForm;
