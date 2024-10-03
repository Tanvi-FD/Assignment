import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [existingRecords, setExistingRecords] = useState([]); 
  const navigate = useNavigate();


 useEffect(() => {
    fetch('http://localhost:5007/students')
      .then((res) => res.json())
      .then((data) => setExistingRecords(data))
      .catch((err) => console.error('Error fetching records:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert('Both name and email are required!');
      return;
    }

  
   existingRecords.some(
      (record) => record.name === name && record.email === email
    );

    if (existingRecords.some(
      (record) => record.name === name && record.email === email
    )) {
      alert('This record already exists!');
      return;
    }

    const jsonData = { name, email };

    fetch('http://localhost:5007/students', {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData)
    })
      .then((res) => {
        if (res) {
          alert('Record inserted!');
          navigate('/');
        }
      })
      .catch((err) => {
        console.error("Error submitting data: ", err);
        alert('Failed to insert record.');
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row text-start justify-content-center">
          <div className="col-xl-6">
            <div>
              <Link to="/" className="btn btn-warning my-2">
                Go back
              </Link>
            </div>
            <div>
              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="nameInput"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
