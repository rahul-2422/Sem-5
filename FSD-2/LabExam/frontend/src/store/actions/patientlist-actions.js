import { patientListActions } from "../slices/PatientListSlice";

export const getPatientList=()=>async (dispatch)=>{
    dispatch(patientListActions.getPatientsRequest());
    const res = await fetch("http://localhost:8000/display");
    const out  = await res.json();
    if (out.message === "success") {
        dispatch(patientListActions.getPatientsSuccess(out.data.model));
    }
    else dispatch(patientListActions.getPatientsFailure(out.error));
}