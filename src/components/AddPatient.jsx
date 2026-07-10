import React from 'react'

const AddPatient = () => {
  return (
    <div>
        
<div className="container mt-4">
  <div className="row">
    <div className="col-12">

      <div className="row g-3">

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Patient ID</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" />
        </div>

        {/* Gender */}
        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label d-block">Gender</label>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" />
            <label className="form-check-label">Male</label>
          </div>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" />
            <label className="form-check-label">Female</label>
          </div>

          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" />
            <label className="form-check-label">Other</label>
          </div>
        </div>

        {/* Blood Group */}
        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Blood Group</label>
          <select className="form-select">
            <option>Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Mobile Number</label>
          <input type="tel" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" />
        </div>

        {/* Disease */}
        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Disease / Health Complaint</label>
          <textarea className="form-control" rows="2"></textarea>
        </div>

        {/* Doctor */}
        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Doctor Assigned</label>
          <select className="form-select">
            <option>Select Doctor</option>
            <option>Dr. John Mathew</option>
            <option>Dr. Priya Nair</option>
            <option>Dr. Arun Kumar</option>
            <option>Dr. Meera Das</option>
          </select>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Admission Date</label>
          <input type="date" className="form-control" />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Room Number</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12">
          <label className="form-label">Address</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-success me-2">Register Patient</button>
          <button className="btn btn-danger">Reset</button>
        </div>

      </div>

    </div>
  </div>
</div>



    </div>
  )
}

export default AddPatient