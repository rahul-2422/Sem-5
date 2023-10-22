import {configureStore} from '@reduxjs/toolkit'

import SurveyListSlice from "./slices/PatientListSlice";

const store = configureStore({
    reducer:{
        surveylist:SurveyListSlice.reducer
    }
})
export default store