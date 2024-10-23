import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Redux/UserReducer";

export default function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelet = (id)=>{

    dispatch(deleteUser)
     navigate(0)
  }
  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <h2 className="mb-5">Simple crud app with Redux</h2>
      <Link to='/Create' className="btn btn-primary my-3 p-3">Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>
                <Link
                  to={`/edit/${users.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
                <button
                  onChange={() => handleDelet(users.id)}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
