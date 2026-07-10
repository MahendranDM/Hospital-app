import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewPatient = () => {

  const [data, changeData] = useState([])

  const fetchData =() => {

    axios.get( "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json").then(
        (response)   => {
            changeData(response.data)
        }
    ).catch()

  }

  useEffect(

    () =>{
        fetchData()
    },[]
  )




  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <table className="table table-dark table-hover table-bordered">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Doctor</th>
              <th>Room</th>
              <th>Mobile</th>
            </tr>
          </thead>

          <tbody>
            {data.map((value, index) => (
              <tr key={index}>
                <td>{value.patientId}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.gender}</td>
                <td>{value.bloodGroup}</td>
                <td>{value.doctor}</td>
                <td>{value.room}</td>
                <td>{value.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewPatient;