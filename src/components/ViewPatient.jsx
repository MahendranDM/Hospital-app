import React, { useState } from "react";
import NavBar from "./NavBar";

const ViewPatient = () => {

  const [data, changeData] = useState([
    {
      patientId: "PT101",
      name: "Arun Kumar",
      age: 34,
      gender: "Male",
      bloodGroup: "O+",
      doctor: "Dr. Meera",
      room: "A101",
      mobile: "9876543210"
    },
    {
      patientId: "PT102",
      name: "Anjali Nair",
      age: 27,
      gender: "Female",
      bloodGroup: "A+",
      doctor: "Dr. Joseph",
      room: "A102",
      mobile: "9876543211"
    },
    {
      patientId: "PT103",
      name: "Rahul Das",
      age: 41,
      gender: "Male",
      bloodGroup: "B+",
      doctor: "Dr. Suresh",
      room: "B201",
      mobile: "9876543212"
    },
    {
      patientId: "PT104",
      name: "Sneha Roy",
      age: 30,
      gender: "Female",
      bloodGroup: "AB+",
      doctor: "Dr. Meera",
      room: "B202",
      mobile: "9876543213"
    },
    {
      patientId: "PT105",
      name: "Vishnu Prasad",
      age: 52,
      gender: "Male",
      bloodGroup: "O-",
      doctor: "Dr. Anand",
      room: "C301",
      mobile: "9876543214"
    },
    {
      patientId: "PT106",
      name: "Keerthana S",
      age: 24,
      gender: "Female",
      bloodGroup: "A-",
      doctor: "Dr. Joseph",
      room: "C302",
      mobile: "9876543215"
    },
    {
      patientId: "PT107",
      name: "Nikhil Menon",
      age: 38,
      gender: "Male",
      bloodGroup: "B-",
      doctor: "Dr. Anand",
      room: "D401",
      mobile: "9876543216"
    },
    {
      patientId: "PT108",
      name: "Priya Thomas",
      age: 46,
      gender: "Female",
      bloodGroup: "O+",
      doctor: "Dr. Suresh",
      room: "D402",
      mobile: "9876543217"
    }
  ]);

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