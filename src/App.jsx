import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import AddPatient from "./components/AddPatient";
import SearchPatient from "./components/SearchPatient";
import DeletePatient from "./components/DeletePatient";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/add" element={<AddPatient/>} />
        <Route path="/search" element={<SearchPatient />} />
        <Route path="/delete" element={<DeletePatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;