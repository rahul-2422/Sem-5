import React,{useEffect} from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPatientList } from "../store/actions/patientlist-actions";
import { useSelector,useDispatch } from "react-redux";
const PatientList = () => {
const patientlist = useSelector((state) =>state.patientlist.patients);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getPatientList())
},[dispatch] );

    return (
        <>
            <h1 style={{textAlign: "center", backgroundColor: "white"}}> Patient Data </h1>
            <div style={{ height: '100vh', backgroundColor: 'grey', padding: "5%"}}>
                <Table style={{borderRadius: "15px"}} bordered hover variant='dark'>
                    <thead>
                        <tr>
                            <th>Gender</th>
                            <th>Name</th>
                            <th>Patient ID</th>
                            <th>Weight</th>
                            <th>BMI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patientlist.length>0 && patientlist.map(patient=>
                                <tr>
                                    <td>{patient.gender}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.id}</td>
                                    <td>{patient.weight}</td>
                                    <td>{patient.bmi}</td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default PatientList;
