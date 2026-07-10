import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import AddPatient from "./components/AddPatient";
import SearchPatient from "./components/SearchPatient";
import DischargePatient from "./components/DischargePatient";
import ViewPatient from "./components/ViewPatient";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/add" element={<AddPatient/>} />
        <Route path="/search" element={<SearchPatient />} />
        <Route path="/discharge" element={<DischargePatient />} />
        <Route path="/" element={<ViewPatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;