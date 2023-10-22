import "./App.css";
import { Routes, Route } from "react-router-dom";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<PatientForm />} />
            <Route exact path='/patientlist' element={<PatientList />} />
        </Routes>
    );
}

export default App;