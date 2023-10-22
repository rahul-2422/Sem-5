import { createSlice } from "@reduxjs/toolkit";
const PatientListSlice = createSlice({
    name: "patientlist",
    initialState: {
        loading: false,
        error: null,
        surveys: [],
    },
    reducers: {
        getPatientsRequest(state, action) {
            state.loading = true;
            state.error = null;
        },
        getPatientsSuccess(state, action) {
            state.loading = false;
            state.surveys = action.payload;
            state.error = null;
        },
        getPatientsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const patientListActions = PatientListSlice.actions;
export default PatientListSlice;
