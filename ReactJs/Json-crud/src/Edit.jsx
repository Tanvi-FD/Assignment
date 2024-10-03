import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { editId } = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5007/students/${editId}`)
        .then((res)=>{return res.json()})
        .then((data)=>{
            setName(data.name);
            setEmail(data.email);
        })
    }, [editId]);

        

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!name || !email) {
            setError('Both fields are required.');
            return;
        }
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        const jsonData = { name, email };

        fetch(`http://localhost:5007/students/${editId}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonData)
        })
        .then((res) => {
            if (res) {
                alert('Record updated!');
                navigate('/');
            }
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
                                    <label htmlFor="exampleInputName" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value); setError(''); }}
                                        className="form-control"
                                        id="exampleInputName"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                        className="form-control"
                                        id="exampleInputEmail"
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>

                                {error && <div className="alert alert-danger">{error}</div>}

                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
