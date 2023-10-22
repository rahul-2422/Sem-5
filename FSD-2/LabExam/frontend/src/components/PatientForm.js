import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserForm.css";
import { submitUserform } from "../store/actions/userform-actions";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
const UserForm = () => {
    const [data, setData] = useState({
        gender: "",
        name: "",
        id: "",
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
            name: "",
            id: "",
            weight: "",
            bmi: "",
        })
        // console.log(data);
    };
    return (
        <>
            <img src='/formBackground.png' alt='' />
            {/* <Link style={{ position: "relative", color: "white", padding: "2%" }} className='mb-3 pad' to='/patientlist'>
                Go to survey list
            </Link> */}
            <h1 style={{textAlign: "center", backgroundColor: "white", position: "relative", paddingBottom: "1%"}}>Patient Information Entry</h1>
            <div className='form'>
                <h2 style={{ textAlign: "center", paddingTop: "2%" }} className='textColor'>Patient Info</h2>
                <Form onSubmit={submitHandler} method='POST'>
                    <Form.Group className='mb-3 pad'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>Gender</Form.Label>
                        <Form.Control 
                            name='gender' 
                            type='text' 
                            placeholder='Enter Patient Gender' 
                            value={data.gender}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3 pad'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>Patient Name</Form.Label>
                        <Form.Control
                            name='name'
                            type='text'
                            placeholder='Enter Patient Name'
                            value={data.name}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3 pad'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>Patient Id</Form.Label>
                        <Form.Control
                            name='id'
                            type='text'
                            placeholder='Enter Patient ID'
                            value={data.id}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3 pad'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>Patient Weight</Form.Label>
                        <Form.Control
                            name='weight'
                            type='text'
                            placeholder='Enter Patient Weight'
                            value={data.weight}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3 pad' controlId='formBasicPassword'>
                        <Form.Label style={{ fontWeight: "bold" }} className='textColor'>Patient BMI</Form.Label>
                        <Form.Control
                            name='bmi'
                            type='text'
                            placeholder='Enter Patient BMI'
                            value={data.bmi}
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
